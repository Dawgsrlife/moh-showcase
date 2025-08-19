import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface CountdownProps {
  onEnded?: () => void
}

const Countdown = ({ onEnded }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(5 * 60) // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return

    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
          setIsRunning(false)
          if (onEnded) onEnded()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, timeLeft, onEnded])

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const progress = (timeLeft / (5 * 60)) * 100

  return (
    <motion.div
      className="fixed top-4 right-4 z-50 bg-white rounded-full shadow-lg p-3 flex items-center space-x-3"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-10 h-10">
        <svg className="w-10 h-10" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#eee"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeDasharray="100"
            strokeDashoffset={100 - progress}
          />
        </svg>
      </div>
      <div className="text-lg font-mono font-bold text-gray-900">
        {formatTime(timeLeft)}
      </div>
    </motion.div>
  )
}

export default Countdown