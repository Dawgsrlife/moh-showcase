import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface NavItem {
  id: string
  label: string
  order: number
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Introduction', order: 1 },
  { id: 'timeline', label: 'Timeline', order: 2 },
  { id: 'tools', label: 'Technologies', order: 3 },
  { id: 'team', label: 'Team', order: 4 },
  { id: 'technical-showcase', label: 'Technical', order: 5 },
  { id: 'deep-dives', label: 'Insights', order: 6 },
  { id: 'impact', label: 'Impact', order: 7 },
  { id: 'closing', label: 'Closing', order: 8 }
]

const PresentationNav = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Add effect to push countdown up when nav expands
  useEffect(() => {
    const countdown = document.querySelector('.countdown-container')
    if (countdown) {
      if (isExpanded) {
        countdown.classList.add('countdown-pushed-down')
      } else {
        countdown.classList.remove('countdown-pushed-down')
      }
    }
  }, [isExpanded])

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsExpanded(false)
  }

  const currentItem = navItems.find(item => item.id === activeSection) || navItems[0]

  return (
    <div className={`nav-overlay ${isExpanded ? 'nav-pushed-up' : ''}`}>
      <motion.div
        className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
        initial={false}
        animate={{
          width: isExpanded ? 280 : 64,
          height: isExpanded ? 'auto' : 64
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Collapsed State */}
        {!isExpanded && (
          <motion.button
            onClick={() => setIsExpanded(true)}
            className="w-full h-full p-4 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-center">
              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
                {currentItem.order}
              </div>
            </div>
          </motion.button>
        )}

        {/* Expanded State */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Navigation
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-6 h-6 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left p-2 rounded text-sm transition-all cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-black text-white'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium ${
                      activeSection === item.id
                        ? 'bg-white text-black'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {item.order}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default PresentationNav
