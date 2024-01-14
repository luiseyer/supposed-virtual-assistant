import { Button, NextUIProvider, Tooltip } from '@nextui-org/react'
import { RiRobot2Fill } from '@remixicon/react'
import { useState } from 'react'

const App = () => {
  const [color, setColor] = useState(0)
  const colors = ['text-teal-500', 'text-green-500', 'text-yellow-500', 'text-pink-500', 'text-red-500']

  const changeColor = () => {
    setColor(color => {
      if (color < colors.length - 1) return color + 1
      return 0
    })
  }

  console.log(color)
  return (
    <NextUIProvider>
      <div className='flex h-screen w-full items-center justify-center gap-4 dark:bg-gray-950'>
        <h1 className='text-3xl font-bold dark:text-gray-50'>
          Supposed Virtual Assistant
        </h1>
        <Tooltip content='Click para cambiar el color'>
          <Button isIconOnly variant='light' className='animate-bounce' onClick={changeColor}>
            <RiRobot2Fill size={32} className={colors[color]}/>
          </Button>
        </Tooltip>
      </div>
    </NextUIProvider>
  )
}

export default App
