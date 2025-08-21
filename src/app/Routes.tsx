import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Hero, 
  Timeline, 
  Tools, 
  Team,
  TechnicalShowcase,
  DeepDives, 
  Impact, 
  Closing 
} from '../sections'
import { NavDots, Countdown } from '../components'

const Routes = () => {
  const [timeEnded, setTimeEnded] = useState(false)
  const [timerStarted, setTimerStarted] = useState(false)

  const handleTimeEnd = () => {
    setTimeEnded(true)
  }

  const startTimer = () => {
    setTimerStarted(true)
  }

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="countdown-container">
        <Countdown onEnded={handleTimeEnd} startTimer={timerStarted} />
      </div>
      <NavDots />
      
      <main id="main-content">
        <Hero onStartTimer={startTimer} />
        <Timeline />
        <Tools />
        <Team />
        <TechnicalShowcase />
        <DeepDives />
        <Impact />
        <Closing timeEnded={timeEnded} />
      </main>
    </motion.div>
  )
}

export default Routes