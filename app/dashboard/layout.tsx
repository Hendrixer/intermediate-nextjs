import Shell from '@/components/Shell'

const Dashboard = ({ children, rsvps, events }) => {
  return (
    <Shell>
      <div className="flex w-full h-full">
        <div className="w-1/2 border-r border-default-50">{rsvps}</div>
        <div className="w-1/2 flex flex-col">
          <div className="border-b border-default-50 w-full h-1/2">
            {events}
          </div>
          <div className="w-full h-1/2">{children}</div>
        </div>
      </div>
    </Shell>
  )
}

export default Dashboard
