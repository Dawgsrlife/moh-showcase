import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Sphere, Stars, Sparkles, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

// Enhanced particle system with varied shapes
function FloatingParticles() {
  const mesh = useRef<THREE.InstancedMesh>(null!)
  const count = 80
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 15
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        scale: Math.random() * 0.4 + 0.1,
        speed: Math.random() * 0.02 + 0.01
      })
    }
    return temp
  }, [])
  
  useFrame((state) => {
    if (!mesh.current) return
    
    const time = state.clock.elapsedTime
    
    particles.forEach((particle, i) => {
      const matrix = new THREE.Matrix4()
      
      // More complex floating motion with orbital patterns
      const radius = 2 + Math.sin(time * particle.speed + i) * 1
      const x = particle.position[0] + Math.sin(time * particle.speed + i) * radius * 0.1
      const y = particle.position[1] + Math.cos(time * particle.speed + i * 0.7) * radius * 0.1
      const z = particle.position[2] + Math.sin(time * particle.speed + i * 1.3) * 0.5
      
      matrix.compose(
        new THREE.Vector3(x, y, z),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(
          particle.rotation[0] + time * 0.2,
          particle.rotation[1] + time * 0.15,
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
      <dodecahedronGeometry args={[0.08]} />
      <meshStandardMaterial 
        color="#3b82f6" 
        transparent 
        opacity={0.25}
        roughness={0.2}
        metalness={0.3}
        emissive="#1e40af"
        emissiveIntensity={0.1}
      />
    </instancedMesh>
  )
}

// Animated gradient waves
function GradientWaves() {
  const mesh1 = useRef<THREE.Mesh>(null!)
  const mesh2 = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (mesh1.current) {
      mesh1.current.rotation.x = time * 0.03
      mesh1.current.rotation.y = time * 0.02
      mesh1.current.position.z = Math.sin(time * 0.5) * 2 - 8
    }
    
    if (mesh2.current) {
      mesh2.current.rotation.x = -time * 0.02
      mesh2.current.rotation.y = time * 0.03
      mesh2.current.position.z = Math.cos(time * 0.3) * 1.5 - 12
    }
  })
  
  return (
    <>
      <mesh ref={mesh1} position={[0, 0, -8]} scale={12}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color="#f1f5f9"
          transparent
          opacity={0.08}
          wireframe={false}
          side={THREE.DoubleSide}
          emissive="#e2e8f0"
          emissiveIntensity={0.02}
        />
      </mesh>
      
      <mesh ref={mesh2} position={[0, 0, -12]} scale={8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#ddd6fe"
          transparent
          opacity={0.05}
          wireframe={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}

// Dynamic lighting system
function DynamicLighting() {
  const light1 = useRef<THREE.PointLight>(null!)
  const light2 = useRef<THREE.PointLight>(null!)
  const light3 = useRef<THREE.SpotLight>(null!)
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (light1.current) {
      light1.current.position.x = Math.sin(time * 0.5) * 8
      light1.current.position.y = Math.cos(time * 0.3) * 6
      light1.current.position.z = 5
      light1.current.intensity = 0.3 + Math.sin(time * 2) * 0.1
    }
    
    if (light2.current) {
      light2.current.position.x = Math.cos(time * 0.4) * 6
      light2.current.position.y = Math.sin(time * 0.6) * 8
      light2.current.position.z = 3
      light2.current.intensity = 0.2 + Math.cos(time * 1.5) * 0.05
    }
    
    if (light3.current) {
      light3.current.position.x = state.mouse.x * 5
      light3.current.position.y = state.mouse.y * 5
      light3.current.position.z = 8
    }
  })
  
  return (
    <>
      <pointLight 
        ref={light1}
        color="#3b82f6"
        distance={15}
        decay={2}
      />
      <pointLight 
        ref={light2}
        color="#6366f1"
        distance={12}
        decay={2}
      />
      <spotLight
        ref={light3}
        angle={0.3}
        penumbra={0.5}
        intensity={0.4}
        color="#0ea5e9"
        distance={20}
        decay={2}
      />
    </>
  )
}

// Floating geometric shapes
function FloatingGeometry() {
  return (
    <>
      {[...Array(12)].map((_, i) => (
        <Float
          key={i}
          speed={0.2 + Math.random() * 0.3}
          rotationIntensity={0.1 + Math.random() * 0.2}
          floatIntensity={0.1 + Math.random() * 0.1}
        >
          <Sphere
            position={[
              (Math.random() - 0.5) * 18,
              (Math.random() - 0.5) * 18,
              (Math.random() - 0.5) * 8
            ]}
            scale={Math.random() * 0.4 + 0.1}
          >
            <meshStandardMaterial 
              color={i % 3 === 0 ? "#e2e8f0" : i % 3 === 1 ? "#f1f5f9" : "#ddd6fe"}
              transparent 
              opacity={0.15}
              roughness={0.7}
              metalness={0.1}
            />
          </Sphere>
        </Float>
      ))}
      
      {/* Additional geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <Float
          key={`geo-${i}`}
          speed={0.15 + Math.random() * 0.25}
          rotationIntensity={0.2}
          floatIntensity={0.15}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 6
            ]}
            scale={Math.random() * 0.3 + 0.1}
          >
            {i % 3 === 0 ? (
              <tetrahedronGeometry args={[0.5]} />
            ) : i % 3 === 1 ? (
              <octahedronGeometry args={[0.4]} />
            ) : (
              <icosahedronGeometry args={[0.3]} />
            )}
            <meshStandardMaterial 
              color="#6366f1"
              transparent 
              opacity={0.12}
              roughness={0.4}
              metalness={0.2}
              emissive="#3b82f6"
              emissiveIntensity={0.05}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

// Main enhanced 3D scene
function Scene() {
  const { viewport } = useThree()
  
  return (
    <>
      {/* Enhanced lighting setup */}
      <ambientLight intensity={0.3} color="#f8fafc" />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.4}
        color="#ffffff"
        castShadow
      />
      
      {/* Dynamic lighting system */}
      <DynamicLighting />
      
      {/* Subtle environment */}
      <Environment preset="dawn" background={false} environmentIntensity={0.1} />
      
      {/* Background gradient waves */}
      <GradientWaves />
      
      {/* Star field for depth */}
      <Stars
        radius={100}
        depth={50}
        count={200}
        factor={2}
        saturation={0}
        fade
        speed={0.5}
      />
      
      {/* Subtle sparkles */}
      <Sparkles
        count={30}
        scale={viewport.width}
        size={2}
        speed={0.3}
        opacity={0.3}
        color="#3b82f6"
      />
      
      {/* Enhanced floating particles */}
      <Float
        speed={0.3}
        rotationIntensity={0.2}
        floatIntensity={0.1}
      >
        <FloatingParticles />
      </Float>
      
      {/* Floating geometric shapes */}
      <FloatingGeometry />
    </>
  )
}

// Enhanced fallback for reduced motion
const StaticBackground = () => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.08),transparent_50%)]"></div>
    </div>
  </div>
)

// Main component with enhanced performance
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
          shadows={false}
          gl={{ 
            alpha: true, 
            antialias: false, 
            powerPreference: 'high-performance' 
          }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default AnimatedBackground