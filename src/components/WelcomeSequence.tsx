import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface WelcomeSequenceProps {
  onComplete: () => void
  allowSkip?: boolean
}

const WelcomeSequence = ({ onComplete, allowSkip = true }: WelcomeSequenceProps) => {
  const [currentStep, setCurrentStep] = useState(0)

  const welcomeSteps = useMemo(() => [
    {
      id: 'greeting',
      content: (
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Welcome
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              to my internship showcase
            </p>
          </motion.div>
        </div>
      ),
      duration: 1800
    },
    {
      id: 'presenter',
      content: (
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex justify-center mb-6">
              <img 
                src="/images/AlexTheMango.JPG"
                alt="Alexander He Meng - Profile Picture"
                className="w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Alexander He Meng
            </h1>
            <div className="space-y-3">
              <p className="text-2xl md:text-3xl text-white/90 font-semibold">
                Application Programmer (Co-op)
              </p>
              <p className="text-lg md:text-xl text-white/80 font-medium">
                Ontario Ministry of Public & Business Service Delivery
              </p>
            </div>
          </motion.div>
        </div>
      ),
      duration: 2500
    },
    {
      id: 'mission',
      content: (
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ color: '#ffffff !important' }}>
              Enterprise Impact Achieved
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed max-w-4xl mx-auto">
              Showcasing real-world contributions in SAS Viya migration, 
              automation development, and team collaboration
            </p>
            <div className="flex justify-center items-center space-x-4 pt-4">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 font-medium">5-minute showcase experience</span>
            </div>
          </motion.div>
        </div>
      ),
      duration: 2200
    }
  ], [])

  useEffect(() => {
    if (currentStep < welcomeSteps.length) {
      const timer = setTimeout(() => {
        if (currentStep === welcomeSteps.length - 1) {
          // Last step - fade out and complete
          setTimeout(() => {
            onComplete()
          }, welcomeSteps[currentStep].duration)
        } else {
          setCurrentStep(currentStep + 1)
        }
      }, welcomeSteps[currentStep].duration)

      return () => clearTimeout(timer)
    }
  }, [currentStep, onComplete, welcomeSteps])

  // Keyboard support for accessibility
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        onComplete()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="welcomeGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#welcomeGrid)" />
          </svg>
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {welcomeSteps[currentStep]?.content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Skip button */}
      {allowSkip && (
        <motion.button
          className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
          onClick={onComplete}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Skip Introduction →
        </motion.button>
      )}

      {/* Progress indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex justify-center space-x-3">
            {welcomeSteps.map((_, index: number) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index <= currentStep ? 'bg-white' : 'bg-white/30'
                }`}
                animate={{
                  scale: index === currentStep ? 1.2 : 1,
                }}
              />
            ))}
          </div>
          {allowSkip && (
            <motion.p 
              className="text-white/50 text-xs text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              Press ESC or ENTER to skip
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default WelcomeSequence
