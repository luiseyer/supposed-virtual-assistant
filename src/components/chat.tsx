import { Navbar } from '@components'
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CircularProgress,
  NavbarItem,
  Textarea,
} from '@nextui-org/react'
import { RiMore2Line, RiNotification4Line, RiRobot2Fill, RiSendPlane2Line } from '@remixicon/react'
import { useState } from 'react'

export const Chat: React.FC = () => {
  const messages = [
    {
      user: 'Hello. How are you?',
      system: "Hi! I'm fine, thanks for asking. Can I help you with anything?",
    },
    {
      user: 'What is the weather in Spain? ',
      system:
        'The current weather in Spain is partially cloudy with a high of 56°F and a low of 37°F.',
    },
    {
      user: 'What is the square root of 56?',
      system: 'The square root of 56 is approximately 7.48331477355.',
    },
    {
      user: 'Write a poem',
      system: null,
    },
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
    <>
      <Navbar title='Chat Assistant' icon={<RiRobot2Fill size={24} />}>
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
      </Navbar>

      <section className='flex h-full snap-y flex-col gap-8 overflow-y-auto p-8'>
        {messages.map(({ user, system }, i) => (
          <div key={`message-${i}`} className='max-w-4xl snap-end'>
            <p className='mb-8 text-default-300'>{user}</p>
            <div className='flex items-center gap-4'>
              <Avatar className='shrink-0' />
              <Card shadow='sm' className='bg-default-800 text-default-300'>
                <CardBody>
                  {system === null ? (
                    <CircularProgress size='sm' aria-label='Loading...' />
                  ) : (
                    <p>{system}</p>
                  )}
                </CardBody>
              </Card>
            </div>
          </div>
        ))}
      </section>

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
                'cursor-pointer',
              ],
            }}
          />
          <Button color='primary' type='submit' size='lg' isIconOnly>
            <RiSendPlane2Line />
          </Button>
        </form>
      </div>
    </>
  )
}
