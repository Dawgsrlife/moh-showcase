// Lazy import and plugin registration for GSAP
let gsapPromise: Promise<any> | null = null
let scrollTriggerPromise: Promise<any> | null = null
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
          gsap.registerPlugin(module.ScrollTrigger)
          scrollTriggerRegistered = true
          return module.ScrollTrigger
        })
      }
      await scrollTriggerPromise
    }
    
    return {
      gsap,
      ScrollTrigger: (gsap as any).ScrollTrigger
    }
  },
  
  // Get ScrollTrigger specifically
  getScrollTrigger: async () => {
    const { ScrollTrigger } = await gsapCore.getGSAP()
    return ScrollTrigger
  }
}