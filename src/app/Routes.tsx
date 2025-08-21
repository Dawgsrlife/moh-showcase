import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Hero, 
  Timeline, 
  Tools, 
  DeepDives, 
  Impact, 
  Closing 
} from '../sections'
import { NavDots, AnimatedBackground, Countdown } from '../components'
import PresentationNav from '../components/PresentationNav'

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
      <div className="countdown-container">
        <Countdown onEnded={handleTimeEnd} />
      </div>
      <NavDots />
      <PresentationNav />
      
      <main id="main-content">
        <Hero />
        <Timeline />
        <Tools />
        <DeepDives />
        <Impact />
        <Closing timeEnded={timeEnded} />
      </main>
    </motion.div>
  )
}

export default Routes