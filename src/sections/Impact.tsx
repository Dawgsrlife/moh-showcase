import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../lib/motion'
import Section from '../components/Section'
import Metric from '../components/Metric'
import { metrics } from '../data/metrics'

const Impact = () => {
  return (
    <Section id="impact" variant="snap">
      <div className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantifiable results from my internship work
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                variants={staggerItem}
                transition={{ delay: index * 0.1 }}
              >
                <Metric
                  value={metric.value}
                  label={metric.label}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  description={metric.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Impact