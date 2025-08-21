import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Routes from './Routes'
import { useLenis } from '../hooks/useLenis'
import { useWelcomeSequence } from '../hooks/useWelcomeSequence'
import { SkipLink, WelcomeSequence } from '../components'

const App = () => {
  // Initialize Lenis for smooth scrolling (but only after welcome)
  const { isWelcomeActive, completeWelcome } = useWelcomeSequence({
    autoStart: true,
    skipOnRevisit: true
  })
  
  // Only initialize Lenis after welcome sequence
  useLenis(!isWelcomeActive)

  // Set up CSS variables for theming and Inter font optimization
  useEffect(() => {
    // Set up font optimization
    document.documentElement.style.setProperty('font-display', 'swap')
    
    // Set modern color palette
    document.documentElement.style.setProperty('--primary', '#0ea5e9') // sky-500
    document.documentElement.style.setProperty('--primary-dark', '#0284c7') // sky-600
    document.documentElement.style.setProperty('--primary-light', '#38bdf8') // sky-400
    document.documentElement.style.setProperty('--accent', '#22c55e') // green-500
    document.documentElement.style.setProperty('--accent-dark', '#16a34a') // green-600
    
    // Enable font features for better typography
    document.body.style.fontFeatureSettings = '"rlig" 1, "calt" 1'
  }, [])

  // Prevent scrolling during welcome sequence
  useEffect(() => {
    if (isWelcomeActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isWelcomeActive])

  return (
    <div className="relative font-sans antialiased">
      <SkipLink />
      
      <AnimatePresence mode="wait">
        {isWelcomeActive ? (
          <WelcomeSequence 
            key="welcome"
            onComplete={completeWelcome} 
          />
        ) : (
          <Routes key="main" />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App