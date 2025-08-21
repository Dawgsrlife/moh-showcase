import { useRef, useMemo, useEffect } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  connections: number[]
}

// Spider web / network animated background
const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  
  const config = {
    particleCount: 60,
    maxDistance: 120,
    speed: 0.3,
    particleSize: 2,
    lineOpacity: 0.3,
    particleOpacity: 0.8,
    colors: {
      particles: '#3b82f6',
      connections: '#6366f1'
    }
  }

  const initParticles = (width: number, height: number) => {
    const particles: Particle[] = []
    
    for (let i = 0; i < config.particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * config.speed,
        vy: (Math.random() - 0.5) * config.speed,
        radius: Math.random() * config.particleSize + 0.5,
        opacity: Math.random() * config.particleOpacity + 0.2,
        connections: []
      })
    }
    
    particlesRef.current = particles
  }

  const updateParticles = (width: number, height: number) => {
    particlesRef.current.forEach((particle) => {
      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Bounce off edges
      if (particle.x <= 0 || particle.x >= width) {
        particle.vx *= -1
        particle.x = Math.max(0, Math.min(width, particle.x))
      }
      if (particle.y <= 0 || particle.y >= height) {
        particle.vy *= -1
        particle.y = Math.max(0, Math.min(height, particle.y))
      }

      // Reset connections
      particle.connections = []
    })

    // Calculate connections
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const dx = particlesRef.current[i].x - particlesRef.current[j].x
        const dy = particlesRef.current[i].y - particlesRef.current[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < config.maxDistance) {
          particlesRef.current[i].connections.push(j)
        }
      }
    }
  }

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    // Draw connections first (behind particles)
    ctx.strokeStyle = config.colors.connections
    ctx.lineWidth = 0.8
    
    particlesRef.current.forEach((particle, i) => {
      particle.connections.forEach((connectionIndex) => {
        const connected = particlesRef.current[connectionIndex]
        const dx = particle.x - connected.x
        const dy = particle.y - connected.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Fade connection based on distance
        const opacity = config.lineOpacity * (1 - distance / config.maxDistance)
        ctx.globalAlpha = opacity
        
        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(connected.x, connected.y)
        ctx.stroke()
      })
    })

    // Draw particles
    particlesRef.current.forEach((particle) => {
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.radius * 2
      )
      gradient.addColorStop(0, config.colors.particles)
      gradient.addColorStop(0.5, config.colors.particles + '80')
      gradient.addColorStop(1, 'transparent')
      
      ctx.fillStyle = gradient
      ctx.globalAlpha = particle.opacity
      
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fill()
      
      // Add subtle glow
      ctx.shadowColor = config.colors.particles
      ctx.shadowBlur = 3
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius * 0.5, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
    })
  }

  const animate = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { width, height } = canvas

    // Clear canvas completely for better performance
    ctx.clearRect(0, 0, width, height)

    updateParticles(width, height)
    drawParticles(ctx)

    animationRef.current = requestAnimationFrame(animate)
  }

  const handleResize = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const { innerWidth, innerHeight } = window
    canvas.width = innerWidth
    canvas.height = innerHeight

    initParticles(innerWidth, innerHeight)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    handleResize()
    animate()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 30%, #f1f5f9 100%)',
        opacity: 0.8
      }}
    />
  )
}

// Enhanced fallback for reduced motion
const StaticBackground = () => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.06),transparent_50%)]"></div>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <pattern id="networkGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#networkGrid)" />
        </svg>
      </div>
    </div>
  </div>
)

// Main component
const AnimatedBackground = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  
  if (prefersReducedMotion) {
    return <StaticBackground />
  }
  
  return <NetworkBackground />
}

export default AnimatedBackground