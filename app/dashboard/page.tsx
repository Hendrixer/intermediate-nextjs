import { getAttendeesCountForDashboard } from '@/utils/attendees'

const Home = async () => {
  const count = await getAttendeesCountForDashboard()
  return <div>{count}</div>
}

export default Home
