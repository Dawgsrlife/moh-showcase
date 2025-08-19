// Lazy import helpers for Three.js
export const threeCore = {
  // Load @react-three/fiber
  loadFiber: async () => {
    const { Canvas } = await import('@react-three/fiber')
    return Canvas
  },
  
  // Load @react-three/drei
  loadDrei: async () => {
    const drei = await import('@react-three/drei')
    return drei
  },
  
  // Load both fiber and drei
  loadAll: async () => {
    const [fiber, drei] = await Promise.all([
      threeCore.loadFiber(),
      threeCore.loadDrei()
    ])
    return { Canvas: fiber, ...drei }
  }
}