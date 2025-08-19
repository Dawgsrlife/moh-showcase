import { motion } from 'framer-motion'
import { useScrollScene } from '../hooks/useScrollScene'
import { sectionTransition } from '../lib/motion'
import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  variant: 'snap' | 'pin'
  className?: string
  children: ReactNode
  setupCallback?: (gsap: any, ScrollTrigger: any, el: Element) => () => void
}

const Section = ({ id, variant, className = '', children, setupCallback }: SectionProps) => {
  // Use scroll scene for pinned sections
  const ref = useScrollScene(
    setupCallback || (() => () => {}),
    variant === 'pin' ? { pin: true, scrub: 0.5 } : {}
  )

  // Base classes
  const baseClasses = 'relative w-full'
  
  // Variant-specific classes
  const variantClasses = variant === 'snap' 
    ? 'min-h-screen snap-start snap-always' 
    : 'h-auto'

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`${baseClasses} ${variantClasses} ${className}`}
      variants={sectionTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  )
}

export default Section