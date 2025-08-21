import { useState } from 'react'
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
    <div className="relative">
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
    </div>
  )
}

export default Routes