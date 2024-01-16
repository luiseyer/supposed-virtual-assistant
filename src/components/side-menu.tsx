import { RiChat4Line, RiDashboardLine, RiSettings2Line } from '@remixicon/react'
import { SideMenuItem } from '.'

const Sidebar: React.FC = () => {
  return (
    <nav className='flex flex-col'>
      <SideMenuItem key='chat' icon={RiChat4Line}>Chat Assistant</SideMenuItem>
      <SideMenuItem key='projects' icon={RiDashboardLine}>My Projects</SideMenuItem>
      <SideMenuItem key='settings' icon={RiSettings2Line}>Settings</SideMenuItem>
    </nav>
  )
}

export default Sidebar
