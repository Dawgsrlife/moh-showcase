import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Hero, 
  Timeline, 
  Architecture, 
  Tools, 
  DeepDives, 
  Impact, 
  Closing 
} from '../sections'
import { NavDots, AnimatedBackground, Countdown } from '../components'

const Routes = () => {
  const [timeEnded, setTimeEnded] = useState(false)

  const handleTimeEnd = () => {
    setTimeEnded(true)
  }

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <AnimatedBackground />
      <Countdown onEnded={handleTimeEnd} />
      <NavDots />
      
      <main id="main-content">
        <Hero />
        <Timeline />
        <Architecture />
        <Tools />
        <DeepDives />
        <Impact />
        <Closing timeEnded={timeEnded} />
      </main>
    </motion.div>
  )
}

export default Routes