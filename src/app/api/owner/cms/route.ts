import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticatedFromRequest } from '@/lib/owner-auth'
import { kv } from '@vercel/kv'
import { SiteContent, DEFAULT_CONTENT, CMS_CONTENT_KEY, CMS_DRAFT_KEY, CMS_HISTORY_KEY } from '@/lib/cms'

export async function GET(request: NextRequest) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const [published, draft] = await Promise.all([
      kv.get<SiteContent>(CMS_CONTENT_KEY),
      kv.get<SiteContent>(CMS_DRAFT_KEY),
    ])

    return NextResponse.json({
      published: published || DEFAULT_CONTENT,
      draft: draft || null,
    })
  } catch {
    return NextResponse.json({
      published: DEFAULT_CONTENT,
      draft: null,
    })
  }
}

export async function POST(request: NextRequest) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { content, action } = await request.json()

    if (action === 'save_draft') {
      await kv.set(CMS_DRAFT_KEY, content)
      return NextResponse.json({ success: true, action: 'draft_saved' })
    }

    if (action === 'publish') {
      const current = await kv.get<SiteContent>(CMS_CONTENT_KEY)
      if (current) {
        const history = await kv.get<SiteContent[]>(CMS_HISTORY_KEY) || []
        history.unshift(current)
        await kv.set(CMS_HISTORY_KEY, history.slice(0, 10))
      }
      await kv.set(CMS_CONTENT_KEY, content)
      await kv.del(CMS_DRAFT_KEY)
      return NextResponse.json({ success: true, action: 'published' })
    }

    if (action === 'discard_draft') {
      await kv.del(CMS_DRAFT_KEY)
      return NextResponse.json({ success: true, action: 'draft_discarded' })
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('CMS error:', error)
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 })
  }
}
