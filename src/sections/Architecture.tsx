import { motion } from 'framer-motion'
import Section from '../components/Section'

const Architecture = () => {
  const architectureComponents = [
    {
      title: 'SAS Viya Platform',
      description: 'Cloud-native analytics platform with microservices architecture',
      technologies: ['Kubernetes', 'Docker', 'Microservices'],
      insights: 'Learned enterprise-scale analytics deployment and management'
    },
    {
      title: 'AWS IST Integration',
      description: 'Infrastructure as Code with AWS services and logical architecture',
      technologies: ['AWS IST', 'Cloud Infrastructure', 'Logical Architecture'],
      insights: 'Understanding cloud resource orchestration and scalable infrastructure'
    },
    {
      title: 'Kubernetes Orchestration',
      description: 'Container orchestration for SAS Viya components and pods',
      technologies: ['Pod Management', 'Service Discovery', 'Load Balancing'],
      insights: 'Hands-on experience with enterprise container management'
    },
    {
      title: 'Enterprise Data Flows',
      description: 'SAS Viya reports, flows, and analytics pipeline architecture',
      technologies: ['.flw files', '.egp files', 'SAS Studio'],
      insights: 'Deep understanding of enterprise analytics workflow design'
    }
  ]

  return (
    <Section id="architecture" variant="snap">
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
              Enterprise Architecture
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Deep dive into SAS Viya ecosystem, Kubernetes orchestration, and AWS infrastructure design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {architectureComponents.map((component, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-slate-200/50 p-8 transition-all duration-300 hover:-translate-y-1 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {component.title}
                  </h3>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0 mt-2"></div>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {component.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {component.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="text-sm text-emerald-700 font-medium bg-emerald-50 px-4 py-3 rounded-lg border border-emerald-200/50">
                  🎯 {component.insights}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Architecture Diagram Placeholder */}
          <motion.div
            className="mt-16 pt-12 border-t border-slate-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Enterprise Architecture Understanding
              </h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive knowledge of SAS Viya logical architecture and AWS IST infrastructure design
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border-2 border-dashed border-slate-300 p-12 text-center">
              <div className="space-y-4">
                <div className="flex justify-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    SAS
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-slate-400"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full ml-1"></div>
                  </div>
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                    K8s
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-slate-400"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full ml-1"></div>
                  </div>
                  <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                    AWS
                  </div>
                </div>
                <p className="text-slate-600 font-medium">
                  Enterprise Analytics Platform → Container Orchestration → Cloud Infrastructure
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Architecture
