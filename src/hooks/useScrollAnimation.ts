import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = (
  trigger: string | Element,
  options: {
    start?: string
    end?: string
    scrub?: boolean | number
    pin?: boolean
    animation?: gsap.core.Timeline | (() => gsap.core.Timeline)
  } = {}
) => {
  const animationRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const {
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
      pin = false,
      animation
    } = options

    let tl: gsap.core.Timeline

    if (typeof animation === 'function') {
      tl = animation()
    } else if (animation) {
      tl = animation
    } else {
      // Default card animation
      tl = gsap.timeline()
      tl.from(trigger, {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'power2.out'
      })
    }

    animationRef.current = tl

    ScrollTrigger.create({
      trigger,
      start,
      end,
      scrub,
      pin,
      animation: tl,
      toggleActions: 'play none none reverse'
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
      tl.kill()
    }
  }, [trigger, options])

  return animationRef.current
}

export const useStaggerAnimation = (
  selector: string,
  options: {
    start?: string
    stagger?: number
    y?: number
    opacity?: number
    scale?: number
    duration?: number
  } = {}
) => {
  useEffect(() => {
    const {
      start = 'top 80%',
      stagger = 0.1,
      y = 30,
      opacity = 0,
      scale = 0.98,
      duration = 0.6
    } = options

    const elements = gsap.utils.toArray(selector)

    gsap.fromTo(elements, 
      {
        y,
        opacity,
        scale
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: selector,
          start,
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [selector, options])
}
