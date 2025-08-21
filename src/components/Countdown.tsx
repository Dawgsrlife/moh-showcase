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
      className="fixed top-6 left-6 z-50 glass rounded-xl shadow-lg p-4 flex items-center space-x-4"
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative w-12 h-12">
        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="2"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset={100 - progress}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="text-lg font-bold text-gray-900 tracking-wider">
          {formatTime(timeLeft)}
        </div>
        <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
          Showcase Timer
        </div>
      </div>
    </motion.div>
  )
}

export default Countdown