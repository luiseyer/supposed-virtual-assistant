import { Button } from '@nextui-org/react'

interface Props {
  link?: string
  children: React.ReactNode
  isActive?: boolean
  icon: React.ReactNode
}

export const SideMenuItem: React.FC<Props> = ({
  link,
  isActive = false,
  icon,
  children,
  ...props
}) => {
  const activeGroup = 'bg-[hsl(var(--nextui-default)/0.4)]'
  return (
    <Button
      data-active={isActive}
      data-link={link}
      className={`group justify-start py-8 hover:opacity-100 [&[data-active=true]_svg]:fill-primary [&_svg]:fill-default-400 [&_svg]:transition-colors [&_svg]:hover:fill-primary ${
        isActive && activeGroup
      }`}
      variant='light'
      size='lg'
      startContent={icon}
      {...props}
    >
      {children}
    </Button>
  )
}
