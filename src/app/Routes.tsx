import { useState } from 'react'
import Hero from '../sections/Hero'
import Timeline from '../sections/Timeline'
import Tools from '../sections/Tools'
import DeepDives from '../sections/DeepDives'
import Impact from '../sections/Impact'
import Closing from '../sections/Closing'
import NavDots from '../components/NavDots'
import AnimatedBackground from '../components/AnimatedBackground'
import Countdown from '../components/Countdown'

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
        <Tools />
        <DeepDives />
        <Impact />
        <Closing timeEnded={timeEnded} />
      </main>
    </div>
  )
}

export default Routes