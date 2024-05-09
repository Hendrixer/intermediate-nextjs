'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/images/pardy.png'
import { Button } from '@nextui-org/react'

const links = [
  { route: '/dashboard', name: 'Home' },
  { route: '/dashboard/events', name: 'Events' },
  { route: '/dashboard/guests', name: 'Guests' },
  { route: '/dashboard/activity', name: 'Activity' },
  { route: '/dashboard/settings', name: 'Settings' },
]

const Side = () => {
  const activeClass = 'bg-primary hover:bg-primary'

  return (
    <div className="w-full h-full px-3 relative">
      <div className="mb-12">
        <figure className="w-[80px] pt-4">
          <Image src={Logo} alt="pardy" />
        </figure>
      </div>
      <div>
        {links.map((link) => (
          <div className="w-full" key={link.route}>
            <Link href={link.route}>
              <div
                className={`w-full h-full py-2 px-2 hover:bg-content1 rounded-lg `}
              >
                {link.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full left-0 px-4">
        <Button fullWidth variant="ghost">
          Sign Out
        </Button>
      </div>
    </div>
  )
}

export default Side
