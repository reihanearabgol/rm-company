import { isAuthenticated } from '@/lib/owner-auth'
import { redirect } from 'next/navigation'
import OwnerDashboardClient from '@/components/owner/OwnerDashboardClient'

export default async function OwnerDashboardPage() {
  const authed = await isAuthenticated()
  if (!authed) redirect('/owner/login')

  return <OwnerDashboardClient />
}
