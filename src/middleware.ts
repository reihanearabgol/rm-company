import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticatedFromRequest } from '@/lib/owner-auth'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isDashboard = pathname.startsWith('/owner/dashboard')
  const isOwnerApi = pathname.startsWith('/api/owner/') && !pathname.startsWith('/api/owner/auth')

  if (isDashboard || isOwnerApi) {
    if (!isAuthenticatedFromRequest(request)) {
      if (isDashboard) {
        return NextResponse.redirect(new URL('/owner/login', request.url))
      }
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/owner/dashboard', '/api/owner/:path*'],
}
