import { RiChat4Line, RiDashboardLine, RiSettings2Line } from '@remixicon/react'
import { SideMenuItem } from '.'

export const SideMenu: React.FC = () => {
  return (
    <>
      <nav className='flex flex-col gap-2'>
        <SideMenuItem route='/chat' icon={<RiChat4Line />}>
          Chat Assistant
        </SideMenuItem>
        <SideMenuItem route='/projects' icon={<RiDashboardLine />}>
          My Projects
        </SideMenuItem>
        <SideMenuItem route='/settings' icon={<RiSettings2Line />}>
          Settings
        </SideMenuItem>
      </nav>
    </>
  )
}
