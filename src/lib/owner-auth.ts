import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

const OWNER_PASSWORD = process.env.OWNER_PASSWORD || 'rm-owner-2024'
const SESSION_COOKIE = 'owner_session'
const SESSION_SECRET = process.env.OWNER_SESSION_SECRET || 'rm-session-secret-change-me'

export function verifyPassword(password: string): boolean {
  return password === OWNER_PASSWORD
}

export function createSessionToken(): string {
  const timestamp = Date.now()
  return Buffer.from(`${SESSION_SECRET}:${timestamp}`).toString('base64')
}

export function verifySessionToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8')
    const [secret, timestamp] = decoded.split(':')
    if (secret !== SESSION_SECRET) return false
    const age = Date.now() - parseInt(timestamp)
    const maxAge = 24 * 60 * 60 * 1000
    return age < maxAge
  } catch {
    return false
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  if (!token) return false
  return verifySessionToken(token)
}

export function isAuthenticatedFromRequest(request: NextRequest): boolean {
  const token = request.cookies.get(SESSION_COOKIE)?.value
  if (!token) return false
  return verifySessionToken(token)
}

export const SESSION_COOKIE_NAME = SESSION_COOKIE
