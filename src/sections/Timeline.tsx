import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../lib/motion'
import Section from '../components/Section'
import { milestones } from '../data/milestones'

const Timeline = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <Section id="timeline" variant="snap">
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
              Technical Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Critical milestones in enterprise SAS Viya migration and infrastructure optimization
            </p>
          </motion.div>
          
          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  variants={staggerItem}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start lg:ml-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-16 top-8 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg hidden lg:block"></div>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-slate-200/50 p-8 transition-all duration-300 hover:-translate-y-1 w-full group">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <time className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200/50">
                            {formatDate(milestone.date)}
                          </time>
                          {milestone.impact && (
                            <span className="text-xs text-emerald-600 font-medium uppercase tracking-wide">
                              {milestone.impact.split(' ').slice(0, 3).join(' ')}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                          {milestone.title}
                        </h3>
                        
                        <p className="text-slate-600 leading-relaxed mb-4 font-medium">
                          {milestone.description}
                        </p>
                        
                        {milestone.impact && (
                          <div className="text-sm text-emerald-700 font-medium bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200/50">
                            💡 {milestone.impact}
                          </div>
                        )}
                      </div>
                      
                      {milestone.technologies && (
                        <div className="lg:w-64 flex-shrink-0">
                          <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {milestone.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200/50 hover:bg-slate-200 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Timeline