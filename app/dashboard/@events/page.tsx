import { getEventsForDashboard } from '@/utils/events'
import { getRsvpsForDashboard } from '@/utils/rsvps'

const EventsRsvp = async () => {
  const events = await getEventsForDashboard()

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          {event.id} {event.rsvps}
        </div>
      ))}
    </div>
  )
}

export default EventsRsvp
