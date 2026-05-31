import { NextRequest, NextResponse } from 'next/server'
import { verifyPassword, createSessionToken, SESSION_COOKIE_NAME } from '@/lib/owner-auth'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (!verifyPassword(password)) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const token = createSessionToken()
    const response = NextResponse.json({ success: true })

    response.cookies.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60,
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
