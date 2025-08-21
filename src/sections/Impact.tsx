import { motion } from 'framer-motion'
import Section from '../components/Section'
import Metric from '../components/Metric'
import { metrics } from '../data/metrics'

const Impact = () => {
  return (
    <Section id="impact" variant="snap">
      <div className="min-h-screen relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-cyan-50"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container-max section-padding relative z-10">
          <motion.div
            className="text-center space-y-6 mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Impact & Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Measurable outcomes from enterprise analytics projects
            </p>
          </motion.div>
          
          {/* Metrics Grid */}
          <motion.div
            className="grid-responsive-4 mb-20 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4 p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
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

          {/* Summary */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center space-y-8 p-12 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white rounded-3xl relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform rotate-45 translate-x-full animate-pulse"></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                  <span className="text-cyan-300 font-semibold">🚀 Enterprise Success</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  Province-Wide SAS Viya Migration
                </h3>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Successfully contributed to enterprise migration supporting{' '}
                  <span className="font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">14.5 million Ontario residents</span>{' '}
                  through automated tooling, performance optimization, and comprehensive quality assurance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">Automation</div>
                    <div className="text-gray-400">Tool Development</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">Performance</div>
                    <div className="text-gray-400">Optimization</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">Quality</div>
                    <div className="text-gray-400">Assurance</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Impact