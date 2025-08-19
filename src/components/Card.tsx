import { motion } from 'framer-motion'
import { cardHover } from '../lib/motion'

interface CardProps {
  title: string
  subtitle?: string
  bullets?: string[]
  tags?: string[]
  metric?: {
    value: number
    label: string
    prefix?: string
    suffix?: string
  }
  className?: string
}

const Card = ({ title, subtitle, bullets, tags, metric, className = '' }: CardProps) => {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-200 ${className}`}
      variants={cardHover}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
          
          {bullets && (
            <ul className="space-y-2 mb-4">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {metric && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="text-3xl font-bold text-blue-600">
              {metric.prefix}{metric.value}{metric.suffix}
            </div>
            <div className="text-gray-600">{metric.label}</div>
          </div>
        )}
        
        {tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Card