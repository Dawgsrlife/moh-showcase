import { motion } from 'framer-motion'
import Section from '../components/Section'
import { experiences, recommendations } from '../data/experiences'

const DeepDives = () => {
  const categories = {
    'Technical Excellence': experiences.filter(exp => exp.category === 'technical'),
    'Enterprise Architecture': experiences.filter(exp => exp.category === 'architecture'),
    'Process Innovation': experiences.filter(exp => exp.category === 'process'),
    'Leadership Insights': experiences.filter(exp => exp.category === 'leadership')
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Technical Excellence': return '⚡'
      case 'Enterprise Architecture': return '🏗️'
      case 'Process Innovation': return '🔄'
      case 'Leadership Insights': return '🎯'
      default: return '📋'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technical Excellence': return 'from-blue-500 to-indigo-600'
      case 'Enterprise Architecture': return 'from-emerald-500 to-teal-600'
      case 'Process Innovation': return 'from-orange-500 to-red-600'
      case 'Leadership Insights': return 'from-purple-500 to-pink-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <Section id="deep-dives" variant="snap">
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
              Professional Development
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive learnings and strategic recommendations from enterprise-scale experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(categories).map(([categoryName, categoryExperiences], categoryIndex) => (
              <motion.div
                key={categoryName}
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`bg-gradient-to-r ${getCategoryColor(categoryName)} rounded-2xl p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{getCategoryIcon(categoryName)}</span>
                    <h3 className="text-2xl font-bold">{categoryName}</h3>
                  </div>
                  <p className="text-white/90 text-sm font-medium">
                    {categoryExperiences.length} key {categoryExperiences.length === 1 ? 'learning' : 'learnings'}
                  </p>
                </div>

                <div className="space-y-4">
                  {categoryExperiences.map((experience) => (
                    <motion.div
                      key={experience.id}
                      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg border border-slate-200/50 p-6 transition-all duration-300 hover:-translate-y-1 group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {experience.title}
                        </h4>
                        <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-1 rounded-full">
                          {experience.when}
                        </span>
                      </div>
                      
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {experience.summary}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {experience.tech.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {experience.tech.length > 3 && (
                          <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs">
                            +{experience.tech.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="text-xs text-emerald-700 font-medium bg-emerald-50 px-3 py-2 rounded border border-emerald-200/50">
                        💡 {experience.impact}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Strategic Recommendations Section */}
          <motion.div
            className="mt-20 pt-16 border-t border-slate-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Strategic Recommendations
              </h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Actionable insights for organizational enhancement and operational excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(recommendations).map(([category, items]) => (
                <div key={category} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <ul className="space-y-3">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
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