import { useState } from 'react'
import { Avatar, Button, Card, CardBody, CircularProgress, Input, Navbar, NavbarBrand, NavbarContent, NavbarItem, NextUIProvider, Textarea, Tooltip } from '@nextui-org/react'
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

  const messages = [
    {
      user: 'Hello. How are you?',
      system: "Hi! I'm fine, thanks for asking. Can I help you with anything?"
    },
    {
      user: 'What is the weather in Spain? ',
      system: 'The current weather in Spain is partially cloudy with a high of 56°F and a low of 37°F.'
    },
    {
      user: 'What is the square root of 56?',
      system: 'The square root of 56 is approximately 7.48331477355.'
    },
    {
      user: 'Write a poem',
      system: null
    }
  ]

  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    console.log(value)
  }

  return (
    <NextUIProvider>
      <div className='flex max-h-dvh min-h-dvh'>
        <Sidebar >
          <SideMenu />
        </Sidebar>

        <main className='flex grow flex-col gap-4 bg-default-900 p-6 pb-24'>
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

          <section className='flex h-full snap-y flex-col gap-8 overflow-y-auto p-8'>
            {messages.map(({ user, system }, i) => (
              <div key={i} className='max-w-4xl snap-end'>
                <p className='mb-8 text-default-300'>{user}</p>
                <div className='flex items-center gap-4'>
                  <Avatar className='shrink-0' />
                  <Card shadow='sm' className='bg-default-800 text-default-300'>
                    <CardBody>
                      {system === null
                        ? <CircularProgress size='sm' aria-label='Loading...' />
                        : <p>{system}</p>}
                    </CardBody>
                  </Card>
                </div>
              </div>
            ))}
          </section>

          <div className='hidden h-full items-center justify-center gap-4'>
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
            <form onSubmit={handleSubmit} className='flex grow items-end gap-4 px-6'>
              <Textarea
                value={value}
                onChange={handleChange}
                minRows={1}
                maxRows={20}
                placeholder='type here...'
                size='lg'
                classNames={{
                  input: 'bg-transparent',
                  innerWrapper: 'bg-transparent',
                  inputWrapper: [
                    'min-h-12',
                    'bg-default-800',
                    'group-data-[hover=true]:bg-default-700',
                    'group-data-[focus=true]:bg-default-700',
                    'cursor-pointer'
                  ]
                }}
              />
              <Button color='primary' type='submit' size='lg' isIconOnly>
                <RiSendPlane2Line />
              </Button>
            </form>
          </div>
        </main>
      </div>
    </NextUIProvider >
  )
}

export default App
