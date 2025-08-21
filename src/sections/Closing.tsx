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
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">4</div>
                <div className="text-sm text-gray-300 font-medium">Months Experience</div>
              </div>
              <div className="text-center space-y-4 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">36×</div>
                <div className="text-sm text-gray-300 font-medium">Runtime Improvement</div>
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
                <span className="text-2xl font-bold text-white">Looking Forward</span>
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
              className="space-y-8 mb-20"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="mailto:alex.meng@mail.utoronto.ca" 
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
              </div>
              
              {/* LinkedIn and Resume Links */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <a 
                  href="https://www.linkedin.com/in/alex-he-meng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </a>
                <a 
                  href="/documents/Alexander_He_Meng_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-white/20 space-y-6"
            >
              {/* Profile Picture */}
              <div className="flex justify-center mb-4">
                <img 
                  src="/images/AlexTheMango.JPG"
                  alt="Alexander He Meng - Profile Picture"
                  className="w-20 h-20 rounded-full object-cover border-3 border-white/30"
                />
              </div>
              
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