import { motion } from 'framer-motion'
import Section from '../components/Section'

interface ClosingProps {
  timeEnded: boolean
}

const Closing = ({ timeEnded }: ClosingProps) => {
  return (
    <Section id="closing" variant="snap">
      <div className="min-h-screen relative overflow-hidden">
        {/* Sophisticated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

        <div className="container-max section-padding flex items-center justify-center min-h-screen relative z-10">
          <div className="text-center max-w-4xl">
            {/* Main Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                {timeEnded ? 'Thank You for Your Time!' : 'Thank You'}
              </h2>
              <p className="text-xl text-gray-200">
                For this incredible opportunity to grow and contribute
              </p>
              
              {/* Sparkle effects */}
              <div className="relative">
                <div className="absolute -top-4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping delay-500"></div>
                <div className="absolute -bottom-4 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-1000"></div>
                <div className="absolute top-2 right-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping delay-1500"></div>
              </div>
            </motion.div>

            {/* Key Outcomes - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid-responsive-3 mb-20 gap-8"
            >
              <div className="text-center space-y-4 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">5</div>
                <div className="text-sm text-gray-300 font-medium">Months Experience</div>
              </div>
              <div className="text-center space-y-4 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">36×</div>
                <div className="text-sm text-gray-300 font-medium">Performance Gain</div>
              </div>
              <div className="text-center space-y-4 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">90%</div>
                <div className="text-sm text-gray-300 font-medium">Automation</div>
              </div>
            </motion.div>

            {/* Future Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8 mb-20"
            >
              <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-2xl font-bold text-white">🚀 Looking Forward</span>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <p className="text-gray-200 leading-relaxed max-w-3xl mx-auto text-lg">
                  Ready to apply these enterprise insights and technical skills to drive innovation 
                  in cloud architecture, automation, and data analytics. Excited about continuing 
                  to contribute to meaningful projects that make a difference.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
            >
              <a 
                href="mailto:alexanderhemeng@gmail.com" 
                className="btn btn-primary transform hover:scale-105"
              >
                Get In Touch
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="btn btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                Back to Top
              </button>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-white/20 space-y-4"
            >
              <h3 className="text-xl font-bold text-white">
                Alexander He Meng
              </h3>
              <p className="text-gray-300 text-sm">
                Technical Intern • Ontario Ministry of Public & Business Service Delivery & Procurement
              </p>
              
              {/* Decorative elements */}
              <div className="flex justify-center space-x-4 pt-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-600"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Closing