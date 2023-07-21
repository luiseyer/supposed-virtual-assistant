import { MicIcon } from '@components/Icons'

export const RecordButton: React.FC = () => {
  const startSound = new Audio('/sounds/recording-start.wav')
  // const cancelSound = new Audio('/sounds/recording-cancel.wav')
  const sendSound = new Audio('/sounds/recording-send.wav')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (event.currentTarget.classList.contains('recording')) {
      sendSound.play().catch(null)
      event.currentTarget.classList.remove('recording')
    } else {
      startSound.play().catch(null)
      event.currentTarget.classList.add('recording')
    }
  }

  const handleTouchStart = (event: React.TouchEvent): void => {
    event.preventDefault()
    startSound.play().catch(null)
    event.currentTarget.classList.add('recording')
  }

  const handleTouchEnd = (event: React.TouchEvent): void => {
    event.preventDefault()
    sendSound.play().catch(null)
    event.currentTarget.classList.remove('recording')
  }

  return (
    <div className='flex items-center justify-center px-2.5'>
      <button
        type='button'
        className='relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary hover:bg-primary-700 focus:outline-none [&.recording>span]:animate-ping [&.recording>span]:bg-primary [&.recording]:-translate-y-1/2 [&.recording]:scale-150'
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <span className='absolute inline-flex h-full w-full rounded-full opacity-75' />
        <MicIcon className='h-6 w-6 fill-light' />
        <span className='sr-only'>voice command</span>
      </button>
    </div>
  )
}
