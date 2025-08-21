import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import Section from '../components/Section'

const Hero = () => {
  const nameRef = useRef<HTMLDivElement>(null)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (!nameRef.current) return

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setAnimationComplete(true)
          setTimeout(() => setShowContent(true), 400)
        }, 1200)
      }
    })

    // Initial state
    gsap.set(nameRef.current.children, { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    })

    // Name animation sequence
    tl.to(nameRef.current.children, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    })
    .to(nameRef.current.children, {
      y: -8,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.inOut'
    })
    .to(nameRef.current.children, {
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.inOut'
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <Section id="hero" variant="snap">
      <div className="min-h-screen relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-max section-padding flex items-center justify-center min-h-screen relative z-10">
          <AnimatePresence mode="wait">
            {/* Name Introduction Sequence */}
            {!animationComplete && (
              <motion.div
                key="name-intro"
                className="text-center"
                exit={{ 
                  opacity: 0,
                  scale: 0.98,
                  transition: { duration: 0.6, ease: 'easeInOut' }
                }}
              >
                <div ref={nameRef} className="space-y-4">
                  <div className="text-6xl md:text-8xl font-bold tracking-tight">
                    <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Alexander</span>
                  </div>
                  <div className="text-6xl md:text-8xl font-bold tracking-tight">
                    <span className="block bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">He Meng</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Main Content */}
            {showContent && (
              <motion.div
                key="main-content"
                className="text-center max-w-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-16">
                  {/* Introduction */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                  >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                      Alexander He Meng
                    </h1>
                    <div className="space-y-4">
                      <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200">
                        <span className="text-xl text-gray-700 font-semibold">Technical Intern</span>
                      </div>
                      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Ontario Ministry of Public & Business Service Delivery & Procurement
                      </p>
                    </div>
                  </motion.div>

                  {/* Key Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid-responsive-3 gap-8"
                  >
                    <div className="text-center space-y-3 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">5</div>
                      <div className="text-sm text-gray-600 font-medium">Months Experience</div>
                    </div>
                    <div className="text-center space-y-3 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">36×</div>
                      <div className="text-sm text-gray-600 font-medium">Performance Gain</div>
                    </div>
                    <div className="text-center space-y-3 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
                      <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">90%</div>
                      <div className="text-sm text-gray-600 font-medium">Automation Achieved</div>
                    </div>
                  </motion.div>

                  {/* Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                  >
                    <button
                      onClick={() => {
                        document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="btn btn-primary"
                    >
                      View My Work
                    </button>
                    <a
                      href="mailto:alexanderhemeng@gmail.com"
                      className="btn btn-secondary"
                    >
                      Get In Touch
                    </a>
                  </motion.div>

                  {/* Scroll Indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                  >
                    <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center bg-white/50 backdrop-blur-sm">
                      <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-bounce"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}

export default Hero