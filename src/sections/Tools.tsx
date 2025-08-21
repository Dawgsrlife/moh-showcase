import { motion } from 'framer-motion'
import Section from '../components/Section'
import { experiences } from '../data/experiences'

const Tools = () => {
  // Extract and categorize technologies
  const allTech = experiences.flatMap(exp => exp.tech)
  const uniqueTech = Array.from(new Set(allTech))
  
  const categories = [
    {
      name: 'Cloud & Infrastructure',
      icon: '☁️',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      techs: uniqueTech.filter(tech => 
        ['AWS', 'SAS Viya', 'EC2', 'S3', 'IAM', 'CloudFormation', 'Kubernetes'].includes(tech)
      )
    },
    {
      name: 'Programming & Automation',
      icon: '⚡',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      techs: uniqueTech.filter(tech => 
        ['Python', 'SQL', 'PowerShell', 'Bash', 'JavaScript', 'Git'].includes(tech)
      )
    },
    {
      name: 'Analytics & Business Intelligence',
      icon: '📊',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      techs: uniqueTech.filter(tech => 
        ['SAS', 'Power BI', 'Tableau', 'Excel', 'R'].includes(tech)
      )
    }
  ]

  return (
    <Section id="tools" variant="snap">
      <div className="min-h-screen relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-teal-50"></div>
        
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-teal-400 to-green-400 rounded-full blur-3xl"></div>
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
              Technologies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tools and technologies used in enterprise projects
            </p>
          </motion.div>
          
          {/* Technology Grid */}
          <div className="grid-responsive-3 mb-20 gap-8">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className={`bg-gradient-to-br ${category.bgColor} p-8 rounded-3xl border border-gray-200 hover:shadow-2xl transition-all duration-500 group`}>
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.name}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.techs.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="px-4 py-3 bg-white/70 backdrop-blur-sm rounded-xl text-center font-semibold text-gray-700 border border-white/50 hover:bg-white/90 hover:border-gray-200 transition-all duration-300 group-hover:transform group-hover:scale-105"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Projects Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h3 className="text-2xl font-bold">
              Technical Focus Areas
            </h3>
            <div className="grid-responsive-3">
              {[
                {
                  title: 'Cloud Migration',
                  description: 'Enterprise SAS Viya deployment and AWS infrastructure optimization',
                  icon: '☁️'
                },
                {
                  title: 'Process Automation',
                  description: 'Python scripting and PowerShell automation for operational efficiency',
                  icon: '⚡'
                },
                {
                  title: 'Data Analytics',
                  description: 'Performance analysis and quality assurance for analytics workflows',
                  icon: '📊'
                }
              ].map((area) => (
                <div key={area.title} className="text-center space-y-4">
                  <div className="text-4xl">{area.icon}</div>
                  <h4 className="text-lg font-semibold">{area.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Tools