export interface Metric {
  id: string
  value: number
  label: string
  prefix?: string
  suffix?: string
  description: string
  category?: 'impact' | 'performance' | 'scale' | 'quality'
}

export const metrics: Metric[] = [
  {
    id: 'pipelines',
    value: 20000,
    label: 'SAS Pipelines',
    suffix: '+',
    description: 'Auto-mapped across enterprise systems',
    category: 'scale'
  },
  {
    id: 'performance-gain',
    value: 36,
    label: 'Performance',
    suffix: 'x faster',
    description: 'Runtime improvement observed in testing (hours → minutes)',
    category: 'performance'
  },
  {
    id: 'residents-served',
    value: 14.5,
    label: 'Million',
    description: 'Ontario residents supported by analytics',
    category: 'impact'
  },
  {
    id: 'analysts-enabled',
    value: 1000,
    label: 'Analysts',
    suffix: '+',
    description: 'Enabled with standardized pipelines',
    category: 'impact'
  },
  {
    id: 'mapping-efficiency',
    value: 90,
    label: 'Reduction',
    suffix: '%',
    description: 'In manual mapping effort',
    category: 'performance'
  },
  {
    id: 'files-processed',
    value: 438,
    label: '.flw Files',
    description: 'Tested and optimized',
    category: 'scale'
  },
  {
    id: 'reports-validated',
    value: 50,
    label: 'Enterprise Reports',
    suffix: '+',
    description: 'Thoroughly tested post-migration',
    category: 'quality'
  },
  {
    id: 'runtime-improvement',
    value: 175,
    label: 'Minutes',
    description: 'Runtime reduced (3h → 5m)',
    category: 'performance'
  }
]

export default metrics