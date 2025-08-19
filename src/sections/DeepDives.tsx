import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import { experiences } from '../data/experiences'

const DeepDives = () => {
  // Select specific experiences for deep dives
  const deepDiveExperiences = experiences.filter(exp => 
    ['pipeline-mapping', 'flw-remediation', 'egp-matching', 'performance-testing'].includes(exp.id)
  )

  return (
    <Section id="deep-dives" variant="snap">
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
              Deep Dives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth exploration of key projects and technical challenges
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {deepDiveExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="flex flex-col md:flex-row gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <Card
                    title={experience.title}
                    subtitle={experience.when}
                    bullets={[experience.summary, experience.impact]}
                    tags={experience.tech}
                  />
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-80 flex items-center justify-center">
                    <span className="text-gray-500">Project Visualization</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default DeepDives