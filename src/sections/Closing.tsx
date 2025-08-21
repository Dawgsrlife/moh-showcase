import { motion } from 'framer-motion'
import Section from '../components/Section'

interface ClosingProps {
  timeEnded: boolean
}

const Closing = ({ timeEnded }: ClosingProps) => {
  return (
    <Section id="closing" variant="snap">
      <div className="min-h-screen bg-white">
        <div className="container-max section-padding flex items-center justify-center min-h-screen">
          <div className="text-center max-w-4xl">
            {/* Main Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                {timeEnded ? 'Thank You for Your Time!' : 'Thank You'}
              </h2>
              <p className="text-xl text-gray-600">
                For this incredible opportunity to grow and contribute
              </p>
            </motion.div>

            {/* Key Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid-responsive-3 mb-20"
            >
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold">5</div>
                <div className="text-sm text-gray-600">Months Experience</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold">36×</div>
                <div className="text-sm text-gray-600">Performance Gain</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold">90%</div>
                <div className="text-sm text-gray-600">Automation</div>
              </div>
            </motion.div>

            {/* Future Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 mb-20"
            >
              <h3 className="text-2xl font-bold">
                Looking Forward
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Ready to apply these enterprise insights and technical skills to drive innovation 
                in cloud architecture, automation, and data analytics. Excited about continuing 
                to contribute to meaningful projects that make a difference.
              </p>
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
                className="btn btn-primary"
              >
                Get In Touch
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="btn btn-secondary"
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
              className="pt-8 border-t border-gray-200 space-y-2"
            >
              <h3 className="text-lg font-bold">
                Alexander He Meng
              </h3>
              <p className="text-gray-600 text-sm">
                Technical Intern • Ontario Ministry of Public & Business Service Delivery & Procurement
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Closing