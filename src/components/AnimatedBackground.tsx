import { useState, useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  direction: number
  drift: number
  pulse: number
}

interface FloatingShape {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  speed: number
  opacity: number
  type: 'circle' | 'square' | 'triangle'
}

const AnimatedBackground = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [floatingShapes, setFloatingShapes] = useState<FloatingShape[]>([])
  const animationRef = useRef<number | null>(null)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || prefersReducedMotion) return

    // Initialize particles with more variety
    const newParticles: Particle[] = []
    for (let i = 0; i < 80; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.6 + 0.1,
        speed: Math.random() * 0.3 + 0.1,
        direction: Math.random() * Math.PI * 2,
        drift: Math.random() * 0.02 + 0.01,
        pulse: Math.random() * Math.PI * 2
      })
    }
    setParticles(newParticles)

    // Initialize floating shapes
    const newShapes: FloatingShape[] = []
    const shapeTypes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle']
    for (let i = 0; i < 12; i++) {
      newShapes.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 60 + 20,
        rotation: Math.random() * 360,
        speed: Math.random() * 0.2 + 0.05,
        opacity: Math.random() * 0.1 + 0.02,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)]
      })
    }
    setFloatingShapes(newShapes)

    const animate = (currentTime: number) => {
      timeRef.current = currentTime * 0.001 // Convert to seconds

      // Animate particles with organic movement
      setParticles(prev => prev.map(particle => {
        const newX = particle.x + Math.cos(particle.direction + timeRef.current * particle.drift) * particle.speed
        const newY = particle.y + Math.sin(particle.direction + timeRef.current * particle.drift) * particle.speed
        const pulseOpacity = particle.opacity + Math.sin(timeRef.current * 2 + particle.pulse) * 0.1
        
        return {
          ...particle,
          x: newX > window.innerWidth ? -10 : newX < -10 ? window.innerWidth : newX,
          y: newY > window.innerHeight ? -10 : newY < -10 ? window.innerHeight : newY,
          opacity: Math.max(0.1, Math.min(0.7, pulseOpacity))
        }
      }))

      // Animate floating shapes
      setFloatingShapes(prev => prev.map(shape => {
        const newX = shape.x + Math.cos(timeRef.current * shape.speed) * 0.5
        const newY = shape.y + Math.sin(timeRef.current * shape.speed * 0.7) * 0.3
        
        return {
          ...shape,
          x: newX > window.innerWidth + 50 ? -50 : newX < -50 ? window.innerWidth + 50 : newX,
          y: newY > window.innerHeight + 50 ? -50 : newY < -50 ? window.innerHeight + 50 : newY,
          rotation: shape.rotation + shape.speed * 20
        }
      }))
      
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mounted, prefersReducedMotion])

  if (prefersReducedMotion || !mounted) {
    return (
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <div className="absolute inset-0 bg-white/60"></div>
        </div>
      </div>
    )
  }

  const renderShape = (shape: FloatingShape) => {
    const baseClasses = "absolute transition-opacity duration-1000"
    const style = {
      left: `${shape.x}px`,
      top: `${shape.y}px`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      opacity: shape.opacity,
      transform: `translate(-50%, -50%) rotate(${shape.rotation}deg)`,
    }

    switch (shape.type) {
      case 'circle':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} rounded-full bg-gradient-to-br from-blue-300/30 to-indigo-400/30 blur-sm`}
            style={style}
          />
        )
      case 'square':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} bg-gradient-to-br from-emerald-300/20 to-teal-400/20 blur-sm`}
            style={style}
          />
        )
      case 'triangle':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} bg-gradient-to-br from-violet-300/20 to-purple-400/20 blur-sm`}
            style={{
              ...style,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
          />
        )
    }
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
        
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)
            `,
            animation: 'float 20s ease-in-out infinite'
          }}
        ></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/40"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/40 to-indigo-400/40 blur-[1px]"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: `translate(-50%, -50%)`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {floatingShapes.map(renderShape)}
      </div>
      
      {/* Enhanced geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="hexGrid" width="60" height="52" patternUnits="userSpaceOnUse">
              <path d="M30 2 L52 16 L52 36 L30 50 L8 36 L8 16 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1.5" fill="currentColor"/>
            </pattern>
            <pattern id="lines" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M0 40 L80 40" stroke="currentColor" strokeWidth="0.5"/>
              <path d="M40 0 L40 80" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexGrid)" className="text-slate-400"/>
          <rect width="100%" height="100%" fill="url(#dots)" className="text-blue-400"/>
          <rect width="100%" height="100%" fill="url(#lines)" className="text-indigo-300"/>
        </svg>
      </div>
      
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/30"></div>
      
      {/* Subtle noise texture for depth */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  )
}

export default AnimatedBackground