import 'server-only'
import { db } from '@/db/db'
import { attendees, events, rsvps } from '@/db/schema'
import { memoize } from 'nextjs-better-unstable-cache'
import { eq, count } from 'drizzle-orm'
import { delay } from './delay'

export const getAttendeesCountForDashboard = memoize(
  async (userId: string) => {
    await delay()
    const counts = await db
      .select({
        totalAttendees: count(attendees.id),
      })
      .from(events)
      .leftJoin(rsvps, eq(rsvps.eventId, events.id))
      .leftJoin(attendees, eq(attendees.id, rsvps.attendeeId))
      .where(eq(events.createdById, userId))
      .execute()

    const [firstCount] = counts
    const totalAttendees = firstCount.totalAttendees | 0

    return totalAttendees
  },
  {
    persist: true,
    revalidateTags: () => ['dashboard:attendees'],
    suppressWarnings: true,
    log: ['datacache', 'verbose'],
    logid: 'dashboard:attendees',
  }
)

export const getGuestList = memoize(
  async (userId: string) => {
    await delay()
    const uniqueAttendees = await db
      .selectDistinct({
        id: attendees.id,
        name: attendees.name,
        email: attendees.email,
      })
      .from(events)
      .leftJoin(rsvps, eq(rsvps.eventId, events.id))
      .leftJoin(attendees, eq(attendees.id, rsvps.attendeeId))
      .where(eq(events.createdById, userId))
      .execute()

    return uniqueAttendees
  },
  {
    persist: true,
    revalidateTags: () => ['guests'],
    suppressWarnings: true,
    log: ['datacache', 'verbose'],
    logid: 'guests',
  }
)
