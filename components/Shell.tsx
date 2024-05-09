import { Input } from '@nextui-org/input'
import Side from './Side'

const Shell = ({ children }) => {
  return (
    <div className="flex w-screen h-screen">
      <aside className="w-[200px] min-w-[200px] max-w-[200px] h-full border-r border-default-50">
        <Side />
      </aside>
      <div className="w-[calc(100vw-200px)] ">
        <nav className="h-[65px] border-b border-default-50 flex items-center justify-center">
          <div className="w-1/2">
            <Input size="sm" variant="faded" placeholder="search" />
          </div>
        </nav>
        <main className="h-[calc(100vh-65px)]">{children}</main>
      </div>
    </div>
  )
}

export default Shell
