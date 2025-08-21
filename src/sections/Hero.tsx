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
        {/* Clean Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        
        {/* Subtle geometric overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.15),transparent_50%)]"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

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
                      <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white font-heading">
                        Technical Excellence
                      </h1>
                      <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
                        Presenting enterprise-scale achievements in SAS Viya migration, 
                        AWS infrastructure optimization, and analytics automation
                      </p>
                    </div>

                    {/* Clean Presenter Info */}
                    <div className="pt-8 border-t border-white/10">
                      <div className="inline-flex items-center space-x-4 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white/90 font-medium">5-minute showcase experience</span>
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
                      className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                    >
                      <span className="flex items-center space-x-2">
                        <span>Begin Presentation</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </button>
                    
                    <button
                      onClick={() => setShowContent(false)}
                      className="px-6 py-3 text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 font-medium"
                    >
                      Skip Introduction →
                    </button>
                  </motion.div>

                  {/* Navigation Hint */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="pt-12"
                  >
                    <div className="text-white/50 text-sm font-medium space-y-2">
                      <p>Press ESC or ENTER to skip animations</p>
                      <div className="flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                      </div>
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