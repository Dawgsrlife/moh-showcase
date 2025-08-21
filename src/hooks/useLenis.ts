import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

// Declare Lenis types
interface LenisInstance {
  destroy: () => void
  start: () => void
  stop: () => void
  raf: (time: number) => void
}

export const useLenis = (enabled: boolean = true) => {
  const lenisRef = useRef<LenisInstance | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    // Don't initialize Lenis if user prefers reduced motion or if disabled
    if (prefersReducedMotion || !enabled) {
      return
    }

    let rafId: number

    const initLenis = async () => {
      try {
        // Dynamically import Lenis to avoid blocking the main thread
        const { default: LenisModule } = await import('lenis')
        
        lenisRef.current = new LenisModule({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
        })

        // Connect Lenis to requestAnimationFrame
        const raf = (time: number) => {
          lenisRef.current?.raf(time)
          rafId = requestAnimationFrame(raf)
        }

        rafId = requestAnimationFrame(raf)
      } catch (error) {
        console.warn('Failed to initialize Lenis:', error)
      }
    }

    initLenis()

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [prefersReducedMotion, enabled])

  return lenisRef
}