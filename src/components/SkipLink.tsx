import { useEffect } from 'react'

const SkipLink = () => {
  useEffect(() => {
    // Set up keyboard navigation for skip link
    const handleSkipLink = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && e.shiftKey) {
        const skipLink = document.getElementById('skip-link')
        if (skipLink) {
          skipLink.focus()
        }
      }
    }

    document.addEventListener('keydown', handleSkipLink)
    return () => document.removeEventListener('keydown', handleSkipLink)
  }, [])

  const handleSkip = (e: React.MouseEvent) => {
    e.preventDefault()
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a
      id="skip-link"
      href="#main-content"
      onClick={handleSkip}
      className="fixed top-4 left-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-md shadow-lg transform -translate-y-16 focus:translate-y-0 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  )
}

export default SkipLink