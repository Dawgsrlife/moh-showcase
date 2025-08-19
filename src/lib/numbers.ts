// Counter math utilities

// Format large numbers with commas
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// Animate counting from start to end value
export const animateCount = (
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void
): () => void => {
  const startTime = performance.now()
  const range = end - start
  let stopped = false

  const updateCount = (currentTime: number) => {
    if (stopped) return

    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Ease out function for smooth animation
    const easeProgress = 1 - Math.pow(1 - progress, 3)
    const currentValue = Math.floor(start + range * easeProgress)
    
    callback(currentValue)
    
    if (progress < 1) {
      requestAnimationFrame(updateCount)
    }
  }

  requestAnimationFrame(updateCount)

  // Return cleanup function
  return () => {
    stopped = true
  }
}

// Round to specified decimal places
export const roundToDecimal = (num: number, decimals: number): number => {
  const factor = Math.pow(10, decimals)
  return Math.round(num * factor) / factor
}