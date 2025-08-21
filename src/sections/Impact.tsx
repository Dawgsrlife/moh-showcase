import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../lib/motion'
import Section from '../components/Section'
import Metric from '../components/Metric'
import { metrics } from '../data/metrics'

const Impact = () => {
  const groupedMetrics = {
    impact: metrics.filter(m => m.category === 'impact'),
    performance: metrics.filter(m => m.category === 'performance'),
    scale: metrics.filter(m => m.category === 'scale'),
    quality: metrics.filter(m => m.category === 'quality')
  }

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'impact': return 'Provincial Impact'
      case 'performance': return 'Performance Gains'
      case 'scale': return 'Enterprise Scale'
      case 'quality': return 'Quality Assurance'
      default: return category
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'impact': return '🏛️'
      case 'performance': return '⚡'
      case 'scale': return '📊'
      case 'quality': return '✅'
      default: return '📈'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'impact': return 'from-emerald-500 to-teal-600'
      case 'performance': return 'from-blue-500 to-indigo-600'
      case 'scale': return 'from-purple-500 to-pink-600'
      case 'quality': return 'from-orange-500 to-red-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <Section id="impact" variant="snap">
      <div className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Quantifiable Impact
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Measurable contributions to Ontario's enterprise analytics infrastructure
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {Object.entries(groupedMetrics).map(([category, categoryMetrics], categoryIndex) => 
              categoryMetrics.length > 0 && (
                <motion.div
                  key={category}
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`bg-gradient-to-r ${getCategoryColor(category)} rounded-2xl p-6 text-white`}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getCategoryIcon(category)}</span>
                      <h3 className="text-2xl font-bold">{getCategoryTitle(category)}</h3>
                    </div>
                  </div>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {categoryMetrics.map((metric, index) => (
                      <motion.div
                        key={metric.id}
                        variants={staggerItem}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl border border-slate-200/50 transition-all duration-300 hover:-translate-y-1"
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
                </motion.div>
              )
            )}
          </div>

          {/* Key Achievement Summary */}
          <motion.div
            className="mt-20 pt-16 border-t border-slate-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Enterprise Migration Success</h3>
                <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                  Successfully contributed to province-wide SAS Viya migration supporting 
                  <span className="font-bold text-emerald-300"> 14.5 million Ontario residents</span> through 
                  automated tooling, performance optimization, and comprehensive quality assurance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Impact