import { useState, useEffect } from 'react'

interface UseWelcomeSequenceOptions {
  autoStart?: boolean
  duration?: number
  skipOnRevisit?: boolean
}

export const useWelcomeSequence = (options: UseWelcomeSequenceOptions = {}) => {
  const {
    autoStart = true,
    skipOnRevisit = true
  } = options

  const [isWelcomeActive, setIsWelcomeActive] = useState(false)
  const [hasSeenWelcome, setHasSeenWelcome] = useState(false)

  useEffect(() => {
    // Check if user has seen welcome before (in this session)
    const hasSeenBefore = sessionStorage.getItem('moh-showcase-welcome-seen') === 'true'
    
    if (skipOnRevisit && hasSeenBefore) {
      setHasSeenWelcome(true)
      setIsWelcomeActive(false)
      return
    }

    if (autoStart) {
      // Small delay to ensure smooth initialization
      const timer = setTimeout(() => {
        setIsWelcomeActive(true)
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [autoStart, skipOnRevisit])

  const completeWelcome = () => {
    setIsWelcomeActive(false)
    setHasSeenWelcome(true)
    
    // Mark as seen in session storage
    sessionStorage.setItem('moh-showcase-welcome-seen', 'true')
  }

  const skipWelcome = () => {
    completeWelcome()
  }

  const restartWelcome = () => {
    sessionStorage.removeItem('moh-showcase-welcome-seen')
    setHasSeenWelcome(false)
    setIsWelcomeActive(true)
  }

  return {
    isWelcomeActive,
    hasSeenWelcome,
    completeWelcome,
    skipWelcome,
    restartWelcome
  }
}
