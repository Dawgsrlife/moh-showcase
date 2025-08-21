import { motion } from 'framer-motion'
import Section from '../components/Section'
import { recommendations } from '../data/experiences'

const DeepDives = () => {
  const keyLearnings = [
    {
      title: 'Enterprise Architecture',
      insight: 'Understanding large-scale SAS Viya deployment across government infrastructure',
      impact: 'Gained expertise in cloud-native analytics platforms and microservices architecture'
    },
    {
      title: 'Automation Excellence', 
      insight: 'Developing Python scripts for ETL pipeline automation and quality assurance',
      impact: 'Reduced manual effort by 90% through intelligent automation solutions'
    },
    {
      title: 'Performance Optimization',
      insight: 'AWS infrastructure tuning and query optimization for enterprise workloads', 
      impact: 'Achieved 36x performance improvement in critical analytics processes'
    },
    {
      title: 'Leadership & Communication',
      insight: 'Collaborating with senior stakeholders and presenting technical solutions',
      impact: 'Enhanced ability to translate complex technical concepts for diverse audiences'
    }
  ]

  return (
    <Section id="deep-dives" variant="snap">
      <div className="min-h-screen bg-gray-50">
        <div className="container-max section-padding">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What I Learned
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key insights and professional growth from enterprise experience
            </p>
          </motion.div>
          
          {/* Learning Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {keyLearnings.map((learning, index) => (
              <motion.div
                key={learning.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {learning.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {learning.insight}
                </p>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800 font-medium text-sm">
                    <span className="text-blue-600">Impact:</span> {learning.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                My Recommendations
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic insights for organizational improvement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(recommendations).map(([category, items]) => (
                <div key={category} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <ul className="space-y-3">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default DeepDives