// Simple tests for data files

import experiences from '../../data/experiences'
import milestones from '../../data/milestones'
import metrics from '../../data/metrics'

const testDataStructure = () => {
  console.log('Testing data file structures:')

  // Test experiences data
  console.log('\nTesting experiences data:')
  if (Array.isArray(experiences) && experiences.length > 0) {
    console.log(`✓ Experiences array has ${experiences.length} items`)
    
    // Check first item structure
    const firstExperience = experiences[0]
    if (firstExperience && typeof firstExperience === 'object') {
      const requiredFields = ['id', 'title', 'when', 'summary', 'tech', 'impact']
      const hasAllFields = requiredFields.every(field => field in firstExperience)
      
      if (hasAllFields) {
        console.log('✓ First experience item has all required fields')
      } else {
        console.log('✗ First experience item missing required fields')
      }
    }
  } else {
    console.log('✗ Experiences data is not a valid array')
  }

  // Test milestones data
  console.log('\nTesting milestones data:')
  if (Array.isArray(milestones) && milestones.length > 0) {
    console.log(`✓ Milestones array has ${milestones.length} items`)
    
    // Check first item structure
    const firstMilestone = milestones[0]
    if (firstMilestone && typeof firstMilestone === 'object') {
      const requiredFields = ['id', 'date', 'title', 'description']
      const hasAllFields = requiredFields.every(field => field in firstMilestone)
      
      if (hasAllFields) {
        console.log('✓ First milestone item has all required fields')
      } else {
        console.log('✗ First milestone item missing required fields')
      }
    }
  } else {
    console.log('✗ Milestones data is not a valid array')
  }

  // Test metrics data
  console.log('\nTesting metrics data:')
  if (Array.isArray(metrics) && metrics.length > 0) {
    console.log(`✓ Metrics array has ${metrics.length} items`)
    
    // Check first item structure
    const firstMetric = metrics[0]
    if (firstMetric && typeof firstMetric === 'object') {
      const requiredFields = ['id', 'value', 'label', 'description']
      const hasAllFields = requiredFields.every(field => field in firstMetric)
      
      if (hasAllFields) {
        console.log('✓ First metric item has all required fields')
      } else {
        console.log('✗ First metric item missing required fields')
      }
    }
  } else {
    console.log('✗ Metrics data is not a valid array')
  }

  console.log('\nData structure tests completed.')
}

// Run tests
testDataStructure()

export { testDataStructure }