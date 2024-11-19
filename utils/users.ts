import 'server-only'
import { COOKIE_NAME } from './constants'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getUserFromToken } from './authTools'
import { cache } from 'react'

export const getCurrentUser = cache(async () => {
  const token = (await cookies()).get(COOKIE_NAME)
  if (!token) redirect('/signin')

  const user = await getUserFromToken(token)
  if (!user) redirect('/signin')

  return user
})
