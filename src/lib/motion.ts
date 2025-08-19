import type { Variants } from 'framer-motion'

// Fade in variants
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

// Slide up variants
export const slideUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { y: 20, opacity: 0 }
}

// Stagger variants for lists
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItem: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

// Card hover variants
export const cardHover: Variants = {
  initial: { y: 0 },
  hover: { y: -5, transition: { duration: 0.2 } },
  tap: { y: -2 }
}

// Reduced motion variants
export const reducedMotionVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  hover: {},
  tap: {}
}

// Section transition variants
export const sectionTransition: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  },
  exit: { 
    opacity: 0, 
    y: -50,
    transition: { duration: 0.5 }
  }
}