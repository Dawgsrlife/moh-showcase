import { motion } from 'framer-motion'
import { slideUp, staggerContainer, staggerItem } from '../lib/motion'
import Section from '../components/Section'

const Hero = () => {
  return (
    <Section id="hero" variant="pin">
      <div className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              variants={slideUp}
            >
              Ontario Ministry of Health
              <span className="block text-blue-600">Internship Showcase</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              variants={slideUp}
            >
              Exploring data transformation, automation, and innovation in healthcare technology
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={staggerItem}
            >
              <button
                onClick={() => {
                  const nextSection = document.getElementById('timeline')
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Explore My Work
              </button>
              
              <button
                className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View Resume
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Hero