import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'
import { gsapCore } from '../lib/gsapCore'

export interface ScrollSceneConfig {
  trigger?: string | Element
  start?: string
  end?: string
  pin?: boolean
  scrub?: number | boolean
  onEnter?: (self: any) => void
  onLeave?: (self: any) => void
  onUpdate?: (self: any) => void
}

export const useScrollScene = (
  setupCallback: (gsap: any, ScrollTrigger: any, el: Element) => () => void,
  config: ScrollSceneConfig = {}
) => {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const sceneRef = useRef<any>(null)

  useEffect(() => {
    // Don't initialize ScrollTrigger if user prefers reduced motion
    if (prefersReducedMotion) {
      return
    }

    let cleanup: (() => void) | undefined

    const initScrollScene = async () => {
      try {
        // Get GSAP and ScrollTrigger
        const { gsap, ScrollTrigger } = await gsapCore.getGSAP()
        
        if (!ref.current) return

        // Create ScrollTrigger scene
        sceneRef.current = ScrollTrigger.create({
          trigger: config.trigger || ref.current,
          start: config.start || 'top bottom',
          end: config.end || 'bottom top',
          pin: config.pin || false,
          scrub: config.scrub !== undefined ? config.scrub : false,
          onEnter: config.onEnter,
          onLeave: config.onLeave,
          onUpdate: config.onUpdate,
          // Pass the element to the setup callback
          onRefresh: () => {
            if (ref.current) {
              cleanup = setupCallback(gsap, ScrollTrigger, ref.current)
            }
          }
        })

        // Run setup callback immediately
        if (ref.current) {
          cleanup = setupCallback(gsap, ScrollTrigger, ref.current)
        }
      } catch (error) {
        console.warn('Failed to initialize ScrollScene:', error)
      }
    }

    initScrollScene()

    // Cleanup function
    return () => {
      if (cleanup) {
        cleanup()
      }
      if (sceneRef.current) {
        sceneRef.current.kill()
      }
    }
  }, [setupCallback, config, prefersReducedMotion])

  return ref
}