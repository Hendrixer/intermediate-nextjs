import 'server-only'
import { getCurrentUser } from './users'
import { db } from '@/db/db'
import { desc, eq, inArray } from 'drizzle-orm'
import { rsvps, events } from '@/db/schema'
import { delay } from './delay'

export const getRsvpsForDashboard = async () => {
  const user = await getCurrentUser()

  await delay()

  const userEvents = await db.query.events.findMany({
    where: eq(events.createdById, user.id),
    columns: {
      id: true,
    },
  })

  const userEventIds = userEvents.map((event) => event.id)
  if (!userEventIds.length) return []

  const recentRsvps = await db.query.rsvps.findMany({
    where: inArray(rsvps.eventId, userEventIds),
    orderBy: desc(rsvps.createdAt),
    limit: 10,
    columns: {
      id: true,
      status: true,
      createdAt: true,
    },
    with: {
      attendee: true,
      event: true,
    },
  })

  return recentRsvps
}
