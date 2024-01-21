import { Button } from '@nextui-org/react'
import { Link } from '@tanstack/react-router'

interface Props {
  children: React.ReactNode
  icon: React.ReactNode
  route: string
}

export const SideMenuItem: React.FC<Props> = ({ icon, children, route, ...props }) => {
  return (
    <Button
      as={Link}
      to={route}
      variant='light'
      size='lg'
      activeProps={{ className: 'active' }}
      startContent={icon}
      className='group justify-start py-8 [&.active_svg]:fill-primary [&_svg]:fill-default-400 [&_svg]:transition-colors [&_svg]:hover:fill-primary [&.active]:bg-[hsl(var(--nextui-default)/0.4)]'
      {...props}
    >
      {children}
    </Button>
  )
}
