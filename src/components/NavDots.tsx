import { useState, useEffect } from 'react'

const NavDots = () => {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    // Set up scroll observer
    const handleScroll = () => {
      const sections = ['hero', 'timeline', 'tools', 'deep-dives', 'impact', 'closing']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'tools', label: 'Tools' },
    { id: 'deep-dives', label: 'Deep Dives' },
    { id: 'impact', label: 'Impact' },
    { id: 'closing', label: 'Closing' }
  ]

  return (
    <nav 
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:block"
      aria-label="Section navigation"
    >
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                activeSection === section.id 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to ${section.label} section`}
              aria-current={activeSection === section.id ? 'location' : undefined}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavDots