import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../lib/motion'
import Section from '../components/Section'
import Card from '../components/Card'
import { milestones } from '../data/milestones'

const Timeline = () => {
  return (
    <Section id="timeline" variant="snap">
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
              Workstream Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones and achievements throughout my internship
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                variants={staggerItem}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  title={milestone.title}
                  subtitle={milestone.date}
                  bullets={[milestone.description]}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Timeline