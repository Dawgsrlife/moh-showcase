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
      techs: uniqueTech.filter(tech => 
        ['AWS', 'SAS Viya', 'EC2', 'S3', 'IAM', 'CloudFormation', 'Kubernetes'].includes(tech)
      )
    },
    {
      name: 'Programming & Automation',
      techs: uniqueTech.filter(tech => 
        ['Python', 'SQL', 'PowerShell', 'Bash', 'JavaScript', 'Git'].includes(tech)
      )
    },
    {
      name: 'Analytics & Business Intelligence',
      techs: uniqueTech.filter(tech => 
        ['SAS', 'Power BI', 'Tableau', 'Excel', 'R'].includes(tech)
      )
    }
  ]

  return (
    <Section id="tools" variant="snap">
      <div className="min-h-screen bg-gray-50">
        <div className="container-max section-padding">
          <motion.div
            className="text-center space-y-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Technologies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tools and technologies used in enterprise projects
            </p>
          </motion.div>
          
          {/* Technology Grid */}
          <div className="grid-responsive-3 mb-20">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-center">
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.techs.map((tech) => (
                    <div
                      key={tech}
                      className="px-4 py-3 bg-gray-50 rounded-lg text-center font-medium text-gray-700 border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
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