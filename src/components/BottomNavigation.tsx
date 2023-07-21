import { useLocation, useNavigate } from 'react-router-dom'
import { AccountIcon, DashboardIcon, ForumIcon, SettingsIcon } from '@components/Icons'
import { RecordButton } from '.'

interface ItemProps {
  children: React.ReactNode
  title?: string
  path: string
}

const BottomNavigationItem: React.FC<ItemProps> = ({ children, title, path }) => {
  const pathname = useLocation().pathname.split('/')[1]
  const navigate = useNavigate()

  const handleClick = (): void => {
    navigate(`/${path}`)
  }

  const isActive = pathname === path
  const activeClassName = isActive ? '--active' : ''

  return (
    <button
      type='button'
      className={`group flex flex-col items-center justify-center transition-all delay-100 [&.--active>div>svg]:fill-primary [&.--active>div]:bg-secondary-600 ${activeClassName}`}
      onClick={handleClick}
    >
      <div className='mx-1 rounded-lg p-2 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-secondary [&>svg]:transition-all [&>svg]:delay-100 [&>svg]:group-hover:fill-primary'>
        {children}
      </div>
      <span className='sr-only'>{title}</span>
    </button>
  )
}

export const BottomNavigation: React.FC = () => {
  return (
    <>
      <div className='fixed bottom-0 left-1/2 z-50 h-16 w-full -translate-x-1/2 bg-secondary-800'>
        <div className='mx-auto flex h-full max-w-lg justify-between [&>*]:flex-1'>
          <BottomNavigationItem path='dashboard' title='Dashboard'>
            <DashboardIcon />
          </BottomNavigationItem>

          <BottomNavigationItem path='chats' title='Chats'>
            <ForumIcon />
          </BottomNavigationItem>

          <RecordButton />

          <BottomNavigationItem path='settings' title='Settings'>
            <SettingsIcon />
          </BottomNavigationItem>

          <BottomNavigationItem path='profile' title='Profile'>
            <AccountIcon />
          </BottomNavigationItem>
        </div>
      </div>
    </>
  )
}
