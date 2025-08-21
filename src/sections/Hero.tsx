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
      <div className="min-h-screen relative overflow-hidden">
        {/* Softer Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>

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
                <div ref={nameRef} className="space-y-6">
                  <div className="text-5xl md:text-7xl font-bold tracking-tight">
                    <span className="block text-white font-heading">Alexander</span>
                  </div>
                  <div className="text-5xl md:text-7xl font-bold tracking-tight">
                    <span className="block text-blue-300 font-heading">He Meng</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Main Content */}
            {showContent && (
              <motion.div
                key="main-content"
                className="text-center max-w-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-12">
                  {/* Clean Header Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                  >
                    {/* Main Title */}
                    <div className="space-y-4">
                      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white font-heading">
                        Internship Showcase
                      </h1>
                      <p className="text-lg md:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
                        Enterprise analytics migration, AWS infrastructure work, 
                        and automation development at Ontario Ministry
                      </p>
                    </div>

                    {/* Clean Presenter Info */}
                    <div className="pt-6">
                      <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-slate-200 font-medium">5-minute presentation</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Clean Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                  >
                    <button
                      onClick={() => {
                        document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      Begin Presentation
                    </button>
                    
                    <button
                      onClick={() => setShowContent(false)}
                      className="px-6 py-3 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 rounded-lg transition-all duration-300 font-medium cursor-pointer"
                    >
                      Skip Introduction
                    </button>
                  </motion.div>

                  {/* Simple Navigation Hint */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="pt-8"
                  >
                    <div className="text-slate-400 text-sm">
                      <p>Press ESC or ENTER to skip animations</p>
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