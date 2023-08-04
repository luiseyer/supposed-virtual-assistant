import { useEffect, useRef, useState } from 'react'

import { type Stream, type Interval, type Recorder } from '@/types.d'
import { MIN_RECORDING_DURATION } from '@/consts.d'
import { MicIcon } from '@/components/Icons'
import { formatTime } from '@/utils'

import soundStartSrc from '@/assets/sounds/recording-start.wav'
import soundSendSrc from '@/assets/sounds/recording-send.wav'
import soundCancelSrc from '@/assets/sounds/recording-cancel.wav'

export const RecordButton: React.FC = () => {
  const startSound = new Audio(soundStartSrc)
  const sendSound = new Audio(soundSendSrc)
  const cancelSound = new Audio(soundCancelSrc)

  const buttonRef = useRef<HTMLButtonElement>(null)

  const stream = useRef<Stream>(null)
  const recorder = useRef<Recorder>(null)

  const [duration, setDuration] = useState(0)
  const [showAlert, setShowAlert] = useState(false)
  const [isRecording, setIsRecording] = useState(false)

  const handleStart = async (): Promise<void> => {
    stream.current = await navigator.mediaDevices.getUserMedia({ audio: true })
    recorder.current = new MediaRecorder(stream.current)

    recorder.current.start(MIN_RECORDING_DURATION)

    const startTime = new Date().getTime()
    const currentTime = (): number => new Date().getTime() - startTime
    const blobs: Blob[] = []

    recorder.current.onstart = () => {
      buttonRef.current?.classList.add('recording')
      setIsRecording(true)
      setShowAlert(false)
      startSound.play().catch(null)
    }

    recorder.current.ondataavailable = ({ data }) => {
      if (typeof data === 'undefined') return
      if (data.size === 0) return
      blobs.push(data)
      setDuration(currentTime())
    }

    recorder.current.onstop = () => {
      buttonRef.current?.classList.remove('recording')
      setIsRecording(false)

      stream.current?.getAudioTracks()[0].stop()

      if (currentTime() < MIN_RECORDING_DURATION) {
        cancelSound.play().catch(null)
        setShowAlert(true)
        setDuration(0)
        return
      }

      const audioBlob = new Blob(blobs)
      const audioUrl = URL.createObjectURL(audioBlob)

      sendSound.play().catch(null)
      setDuration(0)

      new Audio(audioUrl).play().catch(null) // ? Prueba
    }
  }

  const handleStop = (): void => {
    recorder.current?.stop()
  }

  useEffect(() => {
    let alertDelay: Interval = null

    if (showAlert) {
      alertDelay = setTimeout(() => {
        setShowAlert(false)
      }, 4000)
    } else alertDelay !== null && clearTimeout(alertDelay)

    return () => {
      alertDelay !== null && clearTimeout(alertDelay)
    }
  }, [showAlert])

  return (
    <div className='flex items-center justify-center px-2.5'>
      <button
        ref={buttonRef}
        type='button'
        className='relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary hover:bg-primary-700 focus:outline-none [&.recording]:-translate-y-1/2 [&.recording]:scale-150'
        onPointerDownCapture={!isRecording ? handleStart : handleStop}
      >
        {isRecording && (
          <>
            <span className='absolute inset-0 animate-ping rounded-full bg-primary opacity-50' />
            <span className='absolute -top-2/3 whitespace-nowrap text-xs'>
              {formatTime(duration)}
            </span>
          </>
        )}

        {!isRecording && showAlert && (
          <span className='absolute -top-full animate-pulse whitespace-nowrap rounded-sm bg-secondary-600 px-2 py-1 text-xs'>
            record at least 1 second
          </span>
        )}
        <MicIcon className='h-6 w-6 fill-light' />
        <span className='sr-only'>voice command</span>
      </button>
    </div>
  )
}
