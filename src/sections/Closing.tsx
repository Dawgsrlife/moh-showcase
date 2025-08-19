import { motion } from 'framer-motion'
import { slideUp } from '../lib/motion'
import Section from '../components/Section'

interface ClosingProps {
  timeEnded: boolean
}

const Closing = ({ timeEnded }: ClosingProps) => {
  return (
    <Section id="closing" variant="snap">
      <div className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              variants={slideUp}
            >
              {timeEnded ? 'Time Complete!' : 'Thank You'}
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              variants={slideUp}
            >
              {timeEnded
                ? 'You\'ve reached the end of my showcase. I hope you enjoyed exploring my work!'
                : 'Thank you for taking the time to explore my internship experience.'}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={slideUp}
            >
              <a
                href="mailto:example@email.com"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get in Touch
              </a>
              
              <a
                href="/resume.pdf"
                className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Download Resume
              </a>
            </motion.div>
            
            <motion.div
              className="mt-12 pt-8 border-t border-gray-200"
              variants={slideUp}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="GitHub"
                >
                  <span className="sr-only">GitHub</span>
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="Twitter"
                >
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Closing