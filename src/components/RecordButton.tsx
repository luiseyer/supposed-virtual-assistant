import { useEffect, useRef, useState } from 'react'
import { MicIcon } from '@components/Icons'

export const RecordButton: React.FC = () => {
  const mediaRecorder = useRef<MediaRecorder | null>(null)
  const [permission, setPermission] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [audioChunks, setAudioChunks] = useState<Blob[] | never[]>([])
  const [audio, setAudio] = useState<string | null>(null)

  const mimeType = 'audio/webm'

  const getMicrophonePermission = async (): Promise<void> => {
    if ('MediaRecorder' in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        setPermission(true)
        setStream(streamData)
      } catch (err: unknown) {
        console.error(err)
      }
    } else {
      alert('The MediaRecorder API is not supported in your browser.')
    }
  }

  const startRecording = async (): Promise<void> => {
    if (stream !== null) {
      setIsRecording(true)
      // create new Media recorder instance using the stream
      const media = new MediaRecorder(stream, { mimeType })
      // set the MediaRecorder instance to the mediaRecorder ref
      mediaRecorder.current = media
      // invokes the start method to start the recording process
      mediaRecorder.current.start()
      const localAudioChunks: Array<Blob | never> = []
      mediaRecorder.current.ondataavailable = (event) => {
        if (typeof event.data === 'undefined') return
        if (event.data.size === 0) return
        localAudioChunks.push(event.data)
      }
      setAudioChunks(localAudioChunks)
    }
  }

  const stopRecording = async (): Promise<void> => {
    if (mediaRecorder.current !== null) {
      setIsRecording(false)
      // stops the recording instance
      mediaRecorder.current.stop()
      mediaRecorder.current.onstop = () => {
        // creates a blob file from the audiochunks data
        const audioBlob = new Blob(audioChunks, { type: mimeType })
        // creates a playable URL from the blob file.
        const audioUrl = URL.createObjectURL(audioBlob)
        setAudio(audioUrl)
        setAudioChunks([])
      }
    }
  }

  const startSound = new Audio('/sounds/recording-start.wav')
  // const cancelSound = new Audio('/sounds/recording-cancel.wav')
  const sendSound = new Audio('/sounds/recording-send.wav')

  const handleStart = async (
    event: React.TouchEvent | React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    if (event instanceof MouseEvent) {
      event.preventDefault()
    }
    event.currentTarget.classList.add('recording')
    await startSound.play()
    await startRecording()
  }

  const handleEnd = async (
    event: React.TouchEvent | React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    if (event instanceof MouseEvent) {
      event.preventDefault()
    }
    event.currentTarget.classList.remove('recording')
    await sendSound.play()
    await stopRecording()
  }

  useEffect(() => {
    if (audio !== null) {
      const voiceAudio = new Audio(audio)
      voiceAudio
        .play()
        .then(() => {
          setAudio(null)
        })
        .catch(null)
    }
  }, [audio])

  return (
    <div className='flex items-center justify-center px-2.5'>
      {permission && (
        <button
          type='button'
          className='relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary hover:bg-primary-700 focus:outline-none [&.recording>span]:animate-ping [&.recording>span]:bg-primary [&.recording]:-translate-y-1/2 [&.recording]:scale-150'
          onClick={isRecording ? handleEnd : handleStart}
          onTouchStart={handleStart}
          onTouchEnd={handleEnd}
        >
          <span className='absolute inline-flex h-full w-full rounded-full opacity-75' />
          <MicIcon className='h-6 w-6 fill-light' />
          <span className='sr-only'>voice command</span>
        </button>
      )}

      {!permission && (
        <button
          type='button'
          className='relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary hover:bg-secondary-500 focus:outline-none'
          onClick={getMicrophonePermission}
        >
          <span className='absolute inline-flex h-full w-full rounded-full opacity-75' />
          <MicIcon className='h-6 w-6 fill-light' />
          <span className='sr-only'>voice command</span>
        </button>
      )}
    </div>
  )
}
