import 'server-only'
import { getCurrentUser } from './users'
import { db } from '@/db/db'
import { attendees, events, rsvps } from '@/db/schema'
import { eq, sql } from 'drizzle-orm'

export const getAttendeesCountForDashboard = async () => {
  const user = await getCurrentUser()

  const counts = await db
    .select({
      totalAttendees: sql`count(distinct ${attendees.id})`,
    })
    .from(events)
    .leftJoin(rsvps, eq(rsvps.eventId, events.id))
    .leftJoin(attendees, eq(attendees.id, rsvps.attendeeId))
    .where(eq(events.createdById, user.id))
    .groupBy(events.id)
    .execute()

  const total = counts.reduce((acc, count) => acc + count.totalAttendees, 0)
  return total
}
