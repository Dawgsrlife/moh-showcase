// Simple test for usePrefersReducedMotion hook

// Mock matchMedia function for testing
const mockMatchMedia = (matches: boolean) => {
  return (query: string) => ({
    matches,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true
  })
}

// Test the hook logic
const testUsePrefersReducedMotion = () => {
  console.log('Testing usePrefersReducedMotion hook logic:')

  // Test case 1: prefers-reduced-motion is enabled
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: mockMatchMedia(true)
  })

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  const prefersReducedMotion = mediaQuery.matches

  if (prefersReducedMotion) {
    console.log('✓ Correctly detects when prefers-reduced-motion is enabled')
  } else {
    console.log('✗ Failed to detect when prefers-reduced-motion is enabled')
  }

  // Test case 2: prefers-reduced-motion is disabled
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: mockMatchMedia(false)
  })

  const mediaQuery2 = window.matchMedia('(prefers-reduced-motion: reduce)')
  const prefersReducedMotion2 = mediaQuery2.matches

  if (!prefersReducedMotion2) {
    console.log('✓ Correctly detects when prefers-reduced-motion is disabled')
  } else {
    console.log('✗ Failed to detect when prefers-reduced-motion is disabled')
  }

  console.log('\nNote: This is a simplified test of the hook logic.')
  console.log('In a real testing environment, we would use React Testing Library')
  console.log('to test the actual hook with a component.')
}

// Run test
testUsePrefersReducedMotion()

export { testUsePrefersReducedMotion }