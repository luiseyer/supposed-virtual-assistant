import { Button } from '@nextui-org/react'

interface Props {
  key?: string
  icon: React.ComponentType<{
    className?: string
  }>
  children: React.ReactNode
}

const SideMenuItem: React.FC<Props> = ({ key, children, ...props }) => {
  return (
    <Button
      key={key}
      className='group justify-start py-8'
      variant='light'
      size='lg'
      startContent={<props.icon className='fill-default-400 transition-colors group-hover:fill-primary' />}>
      {children}
    </Button>
  )
}

export default SideMenuItem
