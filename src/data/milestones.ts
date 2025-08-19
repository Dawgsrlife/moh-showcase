export interface Milestone {
  id: string
  date: string
  title: string
  description: string
  icon?: string
}

export const milestones: Milestone[] = [
  {
    id: 'onboarding',
    date: '2024-01-15',
    title: 'Onboarding Complete',
    description: 'Completed orientation and tool setup'
  },
  {
    id: 'first-delivery',
    date: '2024-02-28',
    title: 'First Delivery',
    description: 'Delivered first automated pipeline mapping tool'
  },
  {
    id: 'performance-study',
    date: '2024-04-15',
    title: 'Performance Study',
    description: 'Completed Redshift vs Viya performance comparison'
  },
  {
    id: 'ui-enhancements',
    date: '2024-05-20',
    title: 'UI Enhancements',
    description: 'Implemented report layout fixes and contrast tweaks'
  },
  {
    id: 'validation-complete',
    date: '2024-06-30',
    title: 'Validation Complete',
    description: 'Finished script validation with PyCharm and pytest'
  }
]

export default milestones