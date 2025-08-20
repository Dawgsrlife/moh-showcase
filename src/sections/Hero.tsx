import { motion } from 'framer-motion'
import { slideUp, staggerContainer, staggerItem } from '../lib/motion'
import Section from '../components/Section'

const Hero = () => {
  return (
    <Section id="hero" variant="pin">
      <div className="min-h-screen flex items-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating orbs with enhanced animations */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl" 
               style={{ 
                 animation: 'breathe 8s ease-in-out infinite, drift 12s ease-in-out infinite',
                 animationDelay: '0s, 1s'
               }}></div>
          <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl" 
               style={{ 
                 animation: 'breathe 6s ease-in-out infinite, drift 10s ease-in-out infinite',
                 animationDelay: '2s, 3s'
               }}></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-xl" 
               style={{ 
                 animation: 'breathe 10s ease-in-out infinite, drift 15s ease-in-out infinite',
                 animationDelay: '4s, 0s'
               }}></div>
          
          {/* Additional subtle geometric shapes */}
          <div className="absolute top-1/6 right-1/3 w-16 h-16 border border-blue-300/20 rounded-lg blur-sm" 
               style={{ 
                 animation: 'float 20s ease-in-out infinite',
                 animationDelay: '6s'
               }}></div>
          <div className="absolute bottom-1/4 left-1/6 w-12 h-12 border border-emerald-300/20 rotate-45 blur-sm" 
               style={{ 
                 animation: 'float 15s ease-in-out infinite',
                 animationDelay: '8s'
               }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 pb-32 relative z-10">
          <motion.div
            className="text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-sm font-medium mb-8"
              variants={slideUp}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              5-minute showcase experience
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 leading-none tracking-tight"
              variants={slideUp}
            >
              <span className="block bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Ontario Ministry
              </span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                of Health
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-slate-700">
                Internship Showcase
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
              variants={slideUp}
            >
              Exploring data transformation, automation, and innovation in 
              <span className="text-blue-600 font-semibold"> healthcare technology</span>
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6"
              variants={staggerItem}
            >
              <button
                onClick={() => {
                  const nextSection = document.getElementById('timeline')
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="flex items-center justify-center">
                  Explore My Work
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 border-2 border-slate-200 rounded-xl font-semibold hover:bg-white hover:border-slate-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 shadow-md hover:shadow-lg">
                View Resume
              </button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex xl:bottom-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <motion.div 
                className="flex flex-col items-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm text-slate-500 mb-3 font-medium">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center relative bg-white/20 backdrop-blur-sm">
                  <motion.div 
                    className="w-1 h-3 bg-slate-400 rounded-full mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Hero