// Lazy import and plugin registration for GSAP
let gsapPromise: Promise<unknown> | null = null
let scrollTriggerPromise: Promise<unknown> | null = null
let scrollTriggerRegistered = false

export const gsapCore = {
  // Get GSAP core
  getGSAP: async () => {
    if (!gsapPromise) {
      gsapPromise = import('gsap').then((module) => module.default)
    }
    
    const gsap = await gsapPromise
    
    // Register ScrollTrigger if not already registered
    if (!scrollTriggerRegistered) {
      if (!scrollTriggerPromise) {
        scrollTriggerPromise = import('gsap/ScrollTrigger').then((module) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(gsap as any).registerPlugin(module.ScrollTrigger)
          scrollTriggerRegistered = true
          return module.ScrollTrigger
        })
      }
      await scrollTriggerPromise
    }
    
    return {
      gsap,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ScrollTrigger: (gsap as any).ScrollTrigger
    }
  },
  
  // Get ScrollTrigger specifically
  getScrollTrigger: async () => {
    const { ScrollTrigger } = await gsapCore.getGSAP()
    return ScrollTrigger
  }
}