import { useEffect } from 'react'
import Routes from './Routes'
import { useLenis } from '../hooks/useLenis'
import SkipLink from '../components/SkipLink'

const App = () => {
  // Initialize Lenis for smooth scrolling
  useLenis()

  // Set up CSS variables for theming
  useEffect(() => {
    document.documentElement.style.setProperty('--primary', '#3b82f6') // blue-500
    document.documentElement.style.setProperty('--primary-dark', '#2563eb') // blue-600
    document.documentElement.style.setProperty('--primary-light', '#93c5fd') // blue-300
  }, [])

  return (
    <div className="relative">
      <SkipLink />
      <Routes />
    </div>
  )
}

export default App