import { Button, ButtonProps } from '@nextui-org/react'
import { Link } from '@tanstack/react-router'
import { clsx } from 'clsx'

interface Props extends ButtonProps {
  route: string
  icon: React.ReactNode
}

const styles = [
  'group justify-start py-8',
  '[&_svg]:fill-default-400 [&_svg]:transition-colors [&_svg]:hover:fill-primary',
  '[&.active]:bg-[hsl(var(--nextui-default)/0.4)]',
  '[&.active_svg]:fill-primary',
]

export const SideMenuItem: React.FC<Props> = ({
  route,
  icon,
  className,
  children,
  ...props
}) => {
  return (
    <Button
      as={Link}
      to={route}
      variant='light'
      size='lg'
      activeProps={{ className: 'active' }}
      startContent={icon}
      className={clsx(styles, className)}
      {...props}
    >
      {children}
    </Button>
  )
}
