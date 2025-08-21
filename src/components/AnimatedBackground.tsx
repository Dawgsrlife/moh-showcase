import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

// Particle system for floating elements
function FloatingParticles() {
  const mesh = useRef<THREE.InstancedMesh>(null!)
  const count = 50
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        scale: Math.random() * 0.3 + 0.1
      })
    }
    return temp
  }, [])
  
  useFrame((state) => {
    if (!mesh.current) return
    
    const time = state.clock.elapsedTime
    
    particles.forEach((particle, i) => {
      const matrix = new THREE.Matrix4()
      
      // Gentle floating motion
      const x = particle.position[0] + Math.sin(time + i) * 0.1
      const y = particle.position[1] + Math.cos(time + i * 0.5) * 0.1
      const z = particle.position[2] + Math.sin(time + i * 0.7) * 0.1
      
      matrix.compose(
        new THREE.Vector3(x, y, z),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(
          particle.rotation[0] + time * 0.1,
          particle.rotation[1] + time * 0.1,
          particle.rotation[2] + time * 0.1
        )),
        new THREE.Vector3(particle.scale, particle.scale, particle.scale)
      )
      
      mesh.current.setMatrixAt(i, matrix)
    })
    
    mesh.current.instanceMatrix.needsUpdate = true
  })
  
  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <octahedronGeometry args={[0.1]} />
      <meshStandardMaterial 
        color="#3b82f6" 
        transparent 
        opacity={0.3}
        roughness={0.4}
        metalness={0.1}
      />
    </instancedMesh>
  )
}

// Gradient sphere background
function GradientSphere() {
  const mesh = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.05
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })
  
  return (
    <mesh ref={mesh} position={[0, 0, -10]} scale={15}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial 
        color="#f1f5f9"
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

// Interactive light that follows mouse
function InteractiveLight() {
  const light = useRef<THREE.PointLight>(null!)
  
  useFrame((state) => {
    if (light.current) {
      // Smooth mouse following
      light.current.position.x = state.mouse.x * 10
      light.current.position.y = state.mouse.y * 10
      light.current.position.z = 5
    }
  })
  
  return (
    <pointLight 
      ref={light}
      intensity={0.5}
      color="#3b82f6"
      distance={20}
      decay={2}
    />
  )
}

// Main 3D scene
function Scene() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      
      {/* Interactive elements */}
      <InteractiveLight />
      
      {/* Background elements */}
      <GradientSphere />
      
      {/* Floating particles */}
      <Float
        speed={0.5}
        rotationIntensity={0.3}
        floatIntensity={0.2}
      >
        <FloatingParticles />
      </Float>
      
      {/* Additional floating spheres for depth */}
      {[...Array(8)].map((_, i) => (
        <Float
          key={i}
          speed={0.3 + Math.random() * 0.4}
          rotationIntensity={0.1}
          floatIntensity={0.1}
        >
          <Sphere
            position={[
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 10
            ]}
            scale={Math.random() * 0.3 + 0.1}
          >
            <meshStandardMaterial 
              color="#e2e8f0"
              transparent 
              opacity={0.2}
              roughness={0.8}
            />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

// Fallback for reduced motion
const StaticBackground = () => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-white/60"></div>
    </div>
  </div>
)

// Main component
const AnimatedBackground = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  
  if (prefersReducedMotion) {
    return <StaticBackground />
  }
  
  return (
    <div className="three-canvas">
      <Suspense fallback={<StaticBackground />}>
        <Canvas
          camera={{ 
            position: [0, 0, 10], 
            fov: 60,
            near: 0.1,
            far: 1000
          }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          style={{ background: 'transparent' }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default AnimatedBackground