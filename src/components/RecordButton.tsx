import { useCallback, useEffect, useRef, useState } from 'react'
import { MicIcon } from '@components/Icons'
import { calculateTimeDuration, wait } from '@/utils'

import soundStartSrc from '@assets/sounds/recording-start.wav'
import soundSendSrc from '@assets/sounds/recording-send.wav'
import soundCancelSrc from '@assets/sounds/recording-cancel.wav'

interface durationObject {
  duration: string
  durationTime: number
  updateDuration: (startTime: number) => void
  resetDuration: () => void
}

interface audioState {
  isRecording: boolean
  blobs: Array<Blob | never>
  url: string | null
}

const useDuration = (
  initialValue = calculateTimeDuration(new Date().getTime())
): durationObject => {
  const [duration, setDuration] = useState(initialValue)
  const [durationTime, setDurationTime] = useState(0)

  const resetDuration = useCallback(() => {
    setDuration(initialValue)
    setDurationTime(0)
  }, [initialValue])

  const updateDuration = (startTime: number): void => {
    setDuration(calculateTimeDuration(startTime))
    setDurationTime(new Date().getTime() - startTime)
  }

  return { duration, durationTime, updateDuration, resetDuration }
}

export const RecordButton: React.FC = () => {
  const startSound = new Audio(soundStartSrc)
  const sendSound = new Audio(soundSendSrc)
  const cancelSound = new Audio(soundCancelSrc)

  const recorder = useRef<MediaRecorder | null>(null)
  const stream = useRef<MediaStream | null>(null)
  const alertDelayRef = useRef<NodeJS.Timeout>()

  const { duration, durationTime, updateDuration, resetDuration } = useDuration()

  const [showAlert, setShowAlert] = useState(false)

  const [audio, setAudio] = useState<audioState>({
    isRecording: false,
    blobs: [],
    url: null
  })

  const startRecording = async (event: React.PointerEvent): Promise<void> => {
    event.currentTarget.classList.add('recording')
    setAudio((state) => ({ ...state, isRecording: true }))
    setShowAlert(false)

    stream.current = await navigator.mediaDevices.getUserMedia({ audio: true })
    await startSound.play()

    recorder.current = new MediaRecorder(stream.current, { audioBitsPerSecond: 128000 })
    recorder.current.start(1000)

    const startTime = new Date().getTime()
    const blobs: Array<Blob | never> = []

    recorder.current.ondataavailable = ({ data }) => {
      if (typeof data === 'undefined') return
      if (data.size === 0) return
      blobs.push(data)
      updateDuration(startTime)
    }

    setAudio((state) => ({ ...state, blobs }))
  }

  const stopRecording = async (event: React.PointerEvent): Promise<void> => {
    event.currentTarget.classList.remove('recording')
    setAudio((state) => ({ ...state, isRecording: false }))

    await wait(500)

    if (recorder.current !== null) {
      recorder.current.stop()

      recorder.current.onstop = async () => {
        stream.current?.getAudioTracks().forEach((track) => {
          track.stop()
        })

        if (durationTime < 1000) {
          await cancelSound.play()
          setShowAlert(true)
          resetDuration()
          return
        }

        if (audio.blobs.length > 0) {
          const audioBlob = new Blob(audio.blobs)
          const audioUrl = URL.createObjectURL(audioBlob)
          setAudio((state) => ({ ...state, url: audioUrl, blobs: [] }))
        }

        await sendSound.play()
        resetDuration()
      }
    }
  }

  useEffect(() => {
    if (showAlert) {
      alertDelayRef.current = setTimeout(() => {
        setShowAlert(false)
      }, 4000)
    } else clearTimeout(alertDelayRef.current)
  }, [showAlert])

  return (
    <div className='flex items-center justify-center px-2.5'>
      <audio // ? temporary element to check if audio was recorded successfully
        autoPlay
        style={{
          position: 'fixed',
          top: 'calc((100dvh - 100% - 1rem) * -1)',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
        src={audio.url ?? ''}
        onEnded={() => {
          setAudio((state) => ({ ...state, url: null }))
        }}
      />

      <button
        type='button'
        className='relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary hover:bg-primary-700 focus:outline-none [&.recording]:-translate-y-1/2 [&.recording]:scale-150'
        onPointerDownCapture={startRecording}
        onPointerUpCapture={stopRecording}
        onPointerCancelCapture={stopRecording}
      >
        {audio.isRecording && (
          <span className='absolute -top-2/3 whitespace-nowrap text-[0.75rem]'>{duration}</span>
        )}

        {!audio.isRecording && showAlert && (
          <span className='absolute -top-full animate-pulse whitespace-nowrap rounded-sm bg-secondary-600 px-2 py-1 text-[0.75rem]'>
            press and hold to record
          </span>
        )}
        <MicIcon className='h-6 w-6 fill-light' />
        <span className='sr-only'>voice command</span>
      </button>
    </div>
  )
}
