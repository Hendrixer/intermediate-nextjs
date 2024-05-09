import { getRsvpsForDashboard } from '@/utils/rsvps'

const RsvpsSlot = async () => {
  const rsvps = await getRsvpsForDashboard()

  return (
    <div>
      {rsvps.map((rsvp) => (
        <div key={rsvp.id}>{rsvp.id}</div>
      ))}
    </div>
  )
}

export default RsvpsSlot
