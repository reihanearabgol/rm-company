import { SiteContent, DEFAULT_CONTENT, CMS_CONTENT_KEY } from './cms'
import { kv } from '@vercel/kv'

export async function getPublishedContent(): Promise<SiteContent> {
  try {
    const content = await kv.get<SiteContent>(CMS_CONTENT_KEY)
    return content || DEFAULT_CONTENT
  } catch {
    return DEFAULT_CONTENT
  }
}
