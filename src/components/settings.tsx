import { Navbar } from '@components'
import { Button, NavbarItem, Tooltip } from '@nextui-org/react'
import { RiMore2Line, RiRobot2Fill } from '@remixicon/react'
import { useState } from 'react'

export const Settings: React.FC = () => {
  const [color, setColor] = useState(0)
  const colors = [
    'text-yellow-400',
    'text-blue-400',
    'text-pink-400',
    'text-green-400',
    'text-purple-400',
  ]
  const changeColor = (): void => {
    setColor((color) => {
      if (color < colors.length - 1) return color + 1
      return 0
    })
  }

  return (
    <>
      <Navbar title='Settings' icon={<RiRobot2Fill size={24} />}>
        <NavbarItem>
          <Button color='default' variant='flat' isIconOnly>
            <RiMore2Line />
          </Button>
        </NavbarItem>
      </Navbar>
      <div className='flex flex-col h-full items-center justify-center gap-8'>
        <div className='flex items-center gap-4'>
          <h1 className='text-3xl font-bold'>Supposed Virtual Assistant</h1>
          <Tooltip content='Click to change color'>
            <Button
              isIconOnly
              variant='light'
              className='animate-bounce'
              onClick={changeColor}
            >
              <RiRobot2Fill size={32} className={colors[color]} />
            </Button>
          </Tooltip>
        </div>
        <h2 className='text-3xl'>Settings</h2>
      </div>
    </>
  )
}
