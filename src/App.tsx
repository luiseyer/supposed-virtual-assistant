import { useState } from 'react'
import { Button, Input, Navbar, NavbarBrand, NavbarContent, NavbarItem, NextUIProvider, Textarea, Tooltip } from '@nextui-org/react'
import { SideMenu } from '@components'
import { Sidebar } from '@layouts'
import { RiMore2Line, RiNotification4Line, RiRobot2Fill, RiSearch2Line, RiSendPlane2Line } from '@remixicon/react'

const App: React.FC = () => {
  const [color, setColor] = useState(0)
  const colors = ['text-yellow-400', 'text-blue-400', 'text-pink-400', 'text-green-400', 'text-purple-400']

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
        <main className='flex grow flex-col gap-4 bg-default-900 p-6 pb-24 font-bold'>
          <Navbar
            position='static'
            classNames={{
              base: 'bg-default-900',
              brand: 'flex items-center gap-4 text-default-300 text-xl'
            }}
          >
            <NavbarBrand>
              <RiRobot2Fill size={24} />
              <p>Chat Assistant</p>
            </NavbarBrand>
            <NavbarContent justify='end'>
              <NavbarItem>
                <Input
                  type='text'
                  placeholder='search'
                  size='sm'
                  classNames={{
                    input: 'bg-transparent',
                    innerWrapper: 'bg-transparent',
                    inputWrapper: [
                      'h-10',
                      'bg-default-800',
                      'group-data-[hover=true]:bg-default-700',
                      'group-data-[focus=true]:bg-default-700',
                      'cursor-pointer'
                    ]
                  }}
                  startContent={<RiSearch2Line size='16' />}
                />
              </NavbarItem>
              <NavbarItem>
                <Button color='primary' variant='flat' isIconOnly>
                  <RiNotification4Line />
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button color='default' variant='flat' isIconOnly>
                  <RiMore2Line />
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          <div className='flex h-full items-center justify-center gap-4'>
            <h1 className='text-3xl font-bold'>
              Supposed Virtual Assistant
            </h1>
            <Tooltip content='Click to change color'>
              <Button isIconOnly variant='light' className='animate-bounce' onClick={changeColor}>
                <RiRobot2Fill size={32} className={colors[color]} />
              </Button>
            </Tooltip>
          </div>
          <div className='fixed bottom-6 left-0 flex w-full'>
            <div className='shrink-0 basis-72 px-4' />
            <div className='flex grow items-end gap-4 px-6'>
              <Textarea
                minRows={1}
                maxRows={20}
                placeholder='type here...'
                classNames={{
                  input: 'bg-transparent',
                  innerWrapper: 'bg-transparent',
                  inputWrapper: [
                    'min-h-10',
                    'bg-default-800',
                    'group-data-[hover=true]:bg-default-700',
                    'group-data-[focus=true]:bg-default-700',
                    'cursor-pointer'
                  ]
                }}
              />
              <Button color='primary' isIconOnly>
                <RiSendPlane2Line />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </NextUIProvider >
  )
}

export default App
