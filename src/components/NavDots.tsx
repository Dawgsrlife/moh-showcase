import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const NavDots = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Set up scroll observer
    const handleScroll = () => {
      const sections = ['hero', 'timeline', 'tools', 'team', 'technical-showcase', 'deep-dives', 'impact', 'closing']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    handleScroll() // Run once on mount
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Try to use Lenis first, fallback to native scrollTo
      try {
        // Check if Lenis is available on window
        const lenis = (window as unknown as { lenis?: { scrollTo: (target: HTMLElement, options?: { duration?: number }) => void } }).lenis
        if (lenis) {
          lenis.scrollTo(section, { duration: 1.5 })
        } else {
          // Fallback to native smooth scroll
          const headerOffset = 80
          const elementPosition = section.offsetTop
          const offsetPosition = elementPosition - headerOffset
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      } catch {
        // Fallback to native smooth scroll
        const headerOffset = 80
        const elementPosition = section.offsetTop
        const offsetPosition = elementPosition - headerOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
    setIsExpanded(false)
  }

  const sections = [
    { id: 'hero', label: 'Introduction' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'tools', label: 'Technologies' },
    { id: 'team', label: 'Team' },
    { id: 'technical-showcase', label: 'Technical' },
    { id: 'deep-dives', label: 'Insights' },
    { id: 'impact', label: 'Impact' },
    { id: 'closing', label: 'Closing' }
  ]

  return (
    <nav 
      className="fixed bottom-6 right-6 z-60 hidden lg:block"
      aria-label="Section navigation"
    >
      <motion.div
        className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xl overflow-hidden"
        initial={false}
        animate={{
          width: isExpanded ? 300 : 64,
          height: isExpanded ? 'auto' : 64
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.4, 0, 0.2, 1],
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      >
        {/* Collapsed State */}
        {!isExpanded && (
          <motion.button
            onClick={() => setIsExpanded(true)}
            className="w-full h-full p-4 flex items-center justify-center hover:bg-gray-50/80 transition-all duration-200 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Expand navigation"
          >
            <div className="text-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-md group-hover:shadow-lg transition-shadow">
                {sections.findIndex(s => s.id === activeSection) + 1}
              </div>
            </div>
          </motion.button>
        )}

        {/* Expanded State */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.15,
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Navigation
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-7 h-7 rounded-full hover:bg-gray-100 flex items-center justify-center transition-all duration-200 cursor-pointer group"
                aria-label="Collapse navigation"
              >
                <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-2">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left p-3 rounded-xl text-sm transition-all duration-200 cursor-pointer group ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'hover:bg-gray-50 text-gray-700 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`Go to ${section.label} section`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                      activeSection === section.id
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'bg-gray-200 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="font-medium">{section.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="mt-5 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium">Progress</span>
                <span className="font-semibold">
                  {sections.findIndex(s => s.id === activeSection) + 1} / {sections.length}
                </span>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-1.5 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%` 
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </nav>
  )
}

export default NavDots