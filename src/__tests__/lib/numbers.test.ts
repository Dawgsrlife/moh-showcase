// Simple tests for numbers utility functions

import { formatNumber, roundToDecimal } from '../../lib/numbers'

// Test formatNumber function
const testFormatNumber = () => {
  const testCases = [
    { input: 1000, expected: '1,000' },
    { input: 1000000, expected: '1,000,000' },
    { input: 123456789, expected: '123,456,789' },
    { input: 0, expected: '0' },
    { input: 5, expected: '5' },
    { input: 999, expected: '999' }
  ]

  console.log('Testing formatNumber function:')
  testCases.forEach(({ input, expected }) => {
    const result = formatNumber(input)
    if (result === expected) {
      console.log(`✓ formatNumber(${input}) = ${result}`)
    } else {
      console.log(`✗ formatNumber(${input}) = ${result}, expected ${expected}`)
    }
  })
}

// Test roundToDecimal function
const testRoundToDecimal = () => {
  const testCases = [
    { input: [3.14159, 2], expected: 3.14 },
    { input: [3.14159, 3], expected: 3.142 },
    { input: [3.14159, 0], expected: 3 },
    { input: [-3.14159, 2], expected: -3.14 },
    { input: [-3.14159, 0], expected: -3 }
  ]

  console.log('\nTesting roundToDecimal function:')
  testCases.forEach(({ input, expected }) => {
    const [num, decimals] = input
    const result = roundToDecimal(num as number, decimals as number)
    if (result === expected) {
      console.log(`✓ roundToDecimal(${num}, ${decimals}) = ${result}`)
    } else {
      console.log(`✗ roundToDecimal(${num}, ${decimals}) = ${result}, expected ${expected}`)
    }
  })
}

// Run tests
testFormatNumber()
testRoundToDecimal()

export { testFormatNumber, testRoundToDecimal }