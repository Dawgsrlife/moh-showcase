import { useState, useEffect, useRef, Suspense } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const AnimatedBackground = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Only mount after initial render to avoid SSR issues
    setMounted(true)
  }, [])

  if (prefersReducedMotion || !mounted) {
    return (
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
    )
  }

  // For now, we'll use a simple gradient background
  // In a full implementation, this would be replaced with Three.js particles
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="absolute inset-0 opacity-30">
          {/* Simple animated elements as placeholder for particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-indigo-300 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-blue-200 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    </div>
  )
}

export default AnimatedBackground