import { useState } from 'react'
import { Button, NextUIProvider, Tooltip } from '@nextui-org/react'
import { SideMenu } from '@components'
import { Sidebar } from '@layouts'
import { RiRobot2Fill } from '@remixicon/react'

const App: React.FC = () => {
  const [color, setColor] = useState(0)
  const colors = ['text-yellow-400', 'text-teal-400', 'text-green-400', 'text-pink-400', 'text-red-400']

  const changeColor = (): void => {
    setColor(color => {
      if (color < colors.length - 1) return color + 1
      return 0
    })
  }

  return (
    <NextUIProvider>
      <div className='flex min-h-dvh'>
        <Sidebar >
          <SideMenu />
        </Sidebar>
        <main className='flex grow items-center justify-center gap-4 bg-default-900 p-6'>
          <h1 className='text-3xl font-bold'>
            Supposed Virtual Assistant
          </h1>
          <Tooltip content='Click to change color'>
            <Button isIconOnly variant='light' className='animate-bounce' onClick={changeColor}>
              <RiRobot2Fill size={32} className={colors[color]} />
            </Button>
          </Tooltip>
        </main>
      </div>
    </NextUIProvider>
  )
}

export default App
