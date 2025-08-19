export interface Experience {
  id: string
  title: string
  when: string
  summary: string
  tech: string[]
  impact: string
  links?: Array<{ label: string; url: string }>
}

export const experiences: Experience[] = [
  {
    id: 'pipeline-mapping',
    title: 'Pipeline Auto-mapping',
    when: '2024',
    summary: 'Python tooling to auto-map 20K+ SAS Viya pipelines to reduce manual mapping',
    tech: ['Python', 'SAS Viya'],
    impact: 'Reduced mapping effort by 90%'
  },
  {
    id: 'flw-remediation',
    title: 'FLW JSON Remediation',
    when: '2024',
    summary: 'Remediation of FLW JSON structures including column casing and `_acct` suffix corrections',
    tech: ['JSON', 'Python'],
    impact: 'Fixed 1000+ data structure inconsistencies'
  },
  {
    id: 'egp-matching',
    title: 'EGP to FLW Matching',
    when: '2024',
    summary: 'EGP to FLW filename matching using fuzzy string match',
    tech: ['Python', 'Fuzzy Matching'],
    impact: 'Automated 95% of file matching process'
  },
  {
    id: 'performance-testing',
    title: 'Performance Testing',
    when: '2024',
    summary: 'Performance tests comparing Redshift and Viya using SAS macros and stopwatch validation',
    tech: ['SAS', 'Redshift', 'Viya'],
    impact: 'Identified 30% performance improvement opportunities'
  },
  {
    id: 'script-validation',
    title: 'Script Validation',
    when: '2024',
    summary: 'Script validation with PyCharm, pytest, and logging of results in markdown',
    tech: ['Python', 'PyCharm', 'pytest'],
    impact: 'Improved script reliability and documentation'
  },
  {
    id: 'ui-polish',
    title: 'Report Visual Fixes',
    when: '2024',
    summary: 'Report visual fixes and UI polish passes',
    tech: ['CSS', 'HTML', 'Design'],
    impact: 'Enhanced user experience and readability'
  },
  {
    id: 'meeting-tracking',
    title: 'Meeting Notes Tracking',
    when: '2024',
    summary: 'Daily scrum notes and production readiness meeting tracking',
    tech: ['Documentation', 'Process'],
    impact: 'Improved team communication and project visibility'
  }
]

export default experiences