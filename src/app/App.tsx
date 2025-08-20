import { useEffect } from 'react'
import Routes from './Routes'
import { useLenis } from '../hooks/useLenis'
import SkipLink from '../components/SkipLink'

const App = () => {
  // Initialize Lenis for smooth scrolling
  useLenis()

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

  return (
    <div className="relative font-sans antialiased">
      <SkipLink />
      <Routes />
    </div>
  )
}

export default App