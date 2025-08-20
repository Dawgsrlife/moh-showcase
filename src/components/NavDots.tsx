import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-[90] hidden lg:block"
      aria-label="Section navigation"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-4 shadow-lg">
        <ul className="space-y-3">
          {sections.map((section) => (
            <li key={section.id}>
              <motion.button
                onClick={() => scrollToSection(section.id)}
                className={`relative group w-4 h-4 rounded-full transition-all duration-300 ${
                  activeSection === section.id 
                    ? 'bg-blue-600 scale-125 shadow-lg' 
                    : 'bg-slate-300 hover:bg-slate-400 hover:scale-110'
                }`}
                aria-label={`Go to ${section.label} section`}
                aria-current={activeSection === section.id ? 'location' : undefined}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Tooltip */}
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                    {section.label}
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-slate-900 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                </div>
                
                {/* Active indicator ring */}
                {activeSection === section.id && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-300"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            </li>
          ))}
        </ul>
        
        {/* Progress indicator */}
        <div className="mt-4 pt-3 border-t border-slate-200">
          <div className="text-xs text-slate-500 font-medium text-center">
            {sections.findIndex(s => s.id === activeSection) + 1} / {sections.length}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavDots