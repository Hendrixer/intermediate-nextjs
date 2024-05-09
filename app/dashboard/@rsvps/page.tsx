import { getRsvpsForDashboard } from '@/utils/rsvps'
import { getCurrentUser } from '@/utils/users'

const RsvpsSlot = async () => {
  const user = await getCurrentUser()
  const rsvps = await getRsvpsForDashboard(user.id)

  return (
    <div>
      {rsvps.map((rsvp) => (
        <div key={rsvp.id}>{rsvp.id}</div>
      ))}
    </div>
  )
}

export default RsvpsSlot
