import { RiChat4Line, RiDashboardLine, RiSettings2Line } from '@remixicon/react'
import { SideMenuItem } from '.'

export const SideMenu: React.FC = () => {
  return (
    <>
      <nav className='flex flex-col'>
        <SideMenuItem link='chat' isActive icon={<RiChat4Line />}>
          Chat Assistant
        </SideMenuItem>
        <SideMenuItem link='projects' icon={<RiDashboardLine />}>
          My Projects
        </SideMenuItem>
        <SideMenuItem link='settings' icon={<RiSettings2Line />}>
          Settings
        </SideMenuItem>
      </nav>
    </>
  )
}
