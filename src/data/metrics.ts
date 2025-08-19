export interface Metric {
  id: string
  value: number
  label: string
  prefix?: string
  suffix?: string
  description: string
}

export const metrics: Metric[] = [
  {
    id: 'pipelines',
    value: 20000,
    label: 'Pipelines',
    suffix: '+',
    description: 'SAS Viya pipelines auto-mapped'
  },
  {
    id: 'time-saved',
    value: 200,
    label: 'Hours',
    suffix: '+',
    description: 'Manual work hours saved'
  },
  {
    id: 'accuracy',
    value: 95,
    label: '% Accuracy',
    description: 'In automated file matching'
  },
  {
    id: 'scripts-validated',
    value: 50,
    label: 'Scripts',
    suffix: '+',
    description: 'Validated with PyCharm and pytest'
  },
  {
    id: 'reports-improved',
    value: 15,
    label: 'Reports',
    suffix: '+',
    description: 'With visual fixes and UI polish'
  }
]

export default metrics