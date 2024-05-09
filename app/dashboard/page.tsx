import { getAttendeesCountForDashboard } from '@/utils/attendees'
import { getCurrentUser } from '@/utils/users'

const Home = async () => {
  const user = await getCurrentUser()
  const count = await getAttendeesCountForDashboard(user.id)
  return <div>{count}</div>
}

export default Home
