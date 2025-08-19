import { useEffect, useRef, useState } from 'react'

export const useInViewOnce = (options: IntersectionObserverInit = {}) => {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window === 'undefined' || !ref.current) {
      return
    }

    // Create observer
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        // Unobserve once in view to prevent multiple triggers
        observer.unobserve(entry.target)
      }
    }, options)

    // Observe the element
    if (ref.current) {
      observer.observe(ref.current)
    }

    // Cleanup
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return { ref, inView }
}