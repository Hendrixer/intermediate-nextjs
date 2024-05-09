// /app/dashboard/events/page.tsx
import { getAllEvents } from '@/utils/events'
import { getCurrentUser } from '@/utils/users'
import Link from 'next/link'

const Events = async () => {
  const user = await getCurrentUser()
  const events = await getAllEvents(user.id)

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <Link href={`/dashboard/events/${event.id}`}>{event.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Events
