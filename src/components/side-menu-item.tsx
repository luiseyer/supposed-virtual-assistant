import { Button, Link } from '@nextui-org/react'

interface Props {
  key?: string
  children: React.ReactNode
  isActive?: boolean
  icon: React.ComponentType<{
    className?: string
  }>
}

const SideMenuItem: React.FC<Props> = ({ key, isActive = false, children, ...props }) => {
  const activeGroup = 'active bg-[hsl(var(--nextui-default)/0.4)]'
  return (
    <Button
      data-active={isActive}
      as={Link}
      key={key}
      className={`group justify-start py-8 hover:opacity-100 active:opacity-100 ${isActive && activeGroup}`}
      variant='light'
      size='lg'
      startContent={<props.icon className='fill-default-400 transition-colors group-hover:fill-primary group-[[data-active=true]]:fill-primary' />}
      {...props}
    >
      {children}
    </Button>
  )
}

export default SideMenuItem
