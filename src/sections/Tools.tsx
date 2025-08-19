import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../lib/motion'
import Section from '../components/Section'
import Card from '../components/Card'
import { experiences } from '../data/experiences'

const Tools = () => {
  // Extract unique technologies from experiences
  const allTech = experiences.flatMap(exp => exp.tech)
  const uniqueTech = Array.from(new Set(allTech))

  return (
    <Section id="tools" variant="snap">
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
              Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technologies I've used throughout my internship
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {uniqueTech.map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center"
                variants={staggerItem}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <span className="text-lg font-medium text-gray-800">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.slice(0, 3).map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={staggerItem}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  title={experience.title}
                  subtitle={experience.when}
                  tags={experience.tech}
                  bullets={[experience.summary]}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Tools