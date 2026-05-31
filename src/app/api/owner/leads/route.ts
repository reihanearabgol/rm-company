import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticatedFromRequest } from '@/lib/owner-auth'
import { LEADS_LIST_KEY, leadKey } from '@/lib/leads'
import { kv } from '@vercel/kv'

export async function GET(request: NextRequest) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const leadIds: string[] = await kv.lrange(LEADS_LIST_KEY, 0, -1)

    if (!leadIds || leadIds.length === 0) {
      return NextResponse.json({ leads: [] })
    }

    const leadPromises = leadIds.map(id => kv.hgetall(leadKey(id)))
    const rawLeads = await Promise.all(leadPromises)

    const leads = rawLeads
      .filter((l): l is NonNullable<typeof l> => l !== null)
      .sort((a, b) => new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime())

    return NextResponse.json({ leads })
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  if (!isAuthenticatedFromRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { id, status, notes } = body

    if (!id) {
      return NextResponse.json({ error: 'Missing lead ID' }, { status: 400 })
    }

    const updates: Record<string, string> = {
      updatedAt: new Date().toISOString(),
    }

    if (status !== undefined) updates.status = status
    if (notes !== undefined) updates.notes = notes

    await kv.hset(leadKey(id), updates)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating lead:', error)
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 })
  }
}
