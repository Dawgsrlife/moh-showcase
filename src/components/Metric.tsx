import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInViewOnce } from '../hooks/useInViewOnce'
import { animateCount, formatNumber } from '../lib/numbers'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface MetricProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  description: string
  className?: string
}

const Metric = ({ 
  value, 
  label, 
  prefix = '', 
  suffix = '', 
  description, 
  className = '' 
}: MetricProps) => {
  const [displayValue, setDisplayValue] = useState(0)
  const prefersReducedMotion = usePrefersReducedMotion()
  const { ref, inView } = useInViewOnce()

  useEffect(() => {
    if (!inView) return

    // If user prefers reduced motion, show the final value immediately
    if (prefersReducedMotion) {
      setDisplayValue(value)
      return
    }

    // Animate the count
    const cleanup = animateCount(0, value, 2000, (currentValue) => {
      setDisplayValue(currentValue)
    })

    // Cleanup function
    return cleanup
  }, [inView, value, prefersReducedMotion])

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-3">
        {prefix}{formatNumber(displayValue)}{suffix}
      </div>
      <div className="text-xl font-semibold text-gray-900 mb-3">{label}</div>
      <div className="text-gray-600 text-sm leading-relaxed">{description}</div>
    </motion.div>
  )
}

export default Metric