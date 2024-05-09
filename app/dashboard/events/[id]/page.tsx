import { getOneEvent } from '@/utils/events'
import { getCurrentUser } from '@/utils/users'
import { redirect } from 'next/navigation'

const EventPage = async ({ params }) => {
  const user = await getCurrentUser()
  const event = await getOneEvent(user.id, params.id)

  if (!event) redirect('/dashboard/events')

  return <div>{event.name}</div>
}

export default EventPage
