import { getEventsForDashboard } from '@/utils/events'
import { getCurrentUser } from '@/utils/users'

const EventsRsvp = async () => {
  const user = await getCurrentUser()
  const events = await getEventsForDashboard(user.id)

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          {event.id} {event.rsvps.length}
        </div>
      ))}
    </div>
  )
}

export default EventsRsvp
