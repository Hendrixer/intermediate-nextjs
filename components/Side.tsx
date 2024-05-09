'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { route: '/dashboard', name: 'Home' },
  { route: '/dashboard/events', name: 'Events' },
  { route: '/dashboard/guests', name: 'Guests' },
  { route: '/dashboard/activity', name: 'Activity' },
  { route: '/dashboard/settings', name: 'Settings' },
]

const Side = () => {
  const path = usePathname()
  const activeClass = 'bg-primary hover:bg-primary'

  return (
    <div className="w-full h-full px-3">
      <div className="mb-20">logo</div>
      <div>
        {links.map((link) => (
          <div className="w-full" key={link.route}>
            <Link href={link.route}>
              <div
                className={`w-full h-full py-2 px-2 hover:bg-content1 rounded-lg ${
                  path === link.route ? activeClass : ''
                }`}
              >
                {link.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Side
