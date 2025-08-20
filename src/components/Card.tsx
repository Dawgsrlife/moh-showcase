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
      className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200/50 p-8 transition-all duration-300 hover:-translate-y-1 ${className}`}
      variants={cardHover}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
            {title}
          </h3>
          {subtitle && (
            <p className="text-slate-600 mb-6 leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
          
          {bullets && (
            <ul className="space-y-3 mb-6">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-700 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {metric && (
          <div className="mt-6 pt-6 border-t border-slate-100">
            <div className="text-4xl font-black text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
              {metric.prefix}{metric.value.toLocaleString()}{metric.suffix}
            </div>
            <div className="text-slate-600 font-medium">{metric.label}</div>
          </div>
        )}
        
        {tags && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50 hover:bg-blue-100 transition-colors"
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