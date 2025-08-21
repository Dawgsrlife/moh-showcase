import { motion } from 'framer-motion'
import Section from '../components/Section'
import { milestones, type Milestone } from '../data/milestones'

interface TimelineItemProps {
  milestone: Milestone
  index: number
}

const TimelineItem = ({ milestone, index }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="relative"
  >
    {/* Timeline connector line */}
    <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 opacity-30"></div>
    
    {/* Timeline dot */}
    <div className="absolute left-4 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>

    <div className="pl-16 card">
      {/* Date Badge */}
      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-4">
        <time className="text-sm text-blue-700 font-semibold">
          {new Date(milestone.date).toLocaleDateString('en-US', { 
            month: 'short', 
            year: 'numeric'
          })}
        </time>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">
          {milestone.title}
        </h3>
        
        <p className="text-gray-700 leading-relaxed text-lg">
          {milestone.description}
        </p>

        {/* Image Display */}
        {milestone.image && (
          <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg group">
            <img 
              src={milestone.image}
              alt={milestone.imageAlt || milestone.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}

        {milestone.impact && (
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-blue-500 rounded-full"></div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
              <p className="text-gray-900 font-semibold">
                💡 {milestone.impact}
              </p>
            </div>
          </div>
        )}

        {milestone.technologies && (
          <div className="flex flex-wrap gap-3">
            {milestone.technologies.map((tech: string, techIndex: number) => (
              <span 
                key={techIndex}
                className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 rounded-full border border-gray-200 hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </motion.div>
)

const Timeline = () => {
  return (
    <Section id="timeline" variant="snap">
      <div className="min-h-screen relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
        
        <div className="container-max section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              What I Accomplished
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Key technical milestones and achievements during my internship
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <TimelineItem
                  key={milestone.id}
                  milestone={milestone}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Timeline