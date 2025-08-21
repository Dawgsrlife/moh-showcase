export interface Milestone {
  id: string
  date: string
  title: string
  description: string
  icon?: string
  technologies?: string[]
  impact?: string
}

export const milestones: Milestone[] = [
  {
    id: 'internship-start',
    date: '2025-05-05',
    title: 'Internship Commenced',
    description: 'Began Application Programmer Co-op position, focusing on SAS Viya enterprise migration initiatives',
    technologies: ['SAS Viya', 'AWS IST', 'Kubernetes'],
    impact: 'Foundation for province-wide analytics transformation'
  },
  {
    id: 'onboarding',
    date: '2025-05-12',
    title: 'Technical Onboarding Complete',
    description: 'Assigned mentor, completed SAS Viya training, and gained access to enterprise systems and architecture documentation',
    technologies: ['SAS Studio', 'Enterprise Guide 8.5', 'Kubernetes Pods'],
    impact: 'Operational readiness for migration support tasks'
  },
  {
    id: 'first-validation',
    date: '2025-05-23',
    title: 'Script Performance Analysis',
    description: 'Conducted comparative testing of Python lowercasing scripts on 438 .flw files, identifying 20x performance improvements',
    technologies: ['Python', 'SAS .flw files', 'Performance Testing'],
    impact: 'Optimized migration tooling efficiency'
  },
  {
    id: 'manual-remediation',
    date: '2025-06-02',
    title: 'Manual File Remediation',
    description: 'Performed systematic remediation of .flw files in SAS Studio, establishing procedures for column reference corrections',
    technologies: ['SAS Studio', 'Query Optimization'],
    impact: 'Standardized remediation methodology'
  },
  {
    id: 'pytest-validation',
    date: '2025-06-03',
    title: 'PyTest Implementation',
    description: 'Deployed pytest validation suite for .flw remediation scripts, ensuring migration stability for primary and secondary queries',
    technologies: ['pytest', 'Python Testing', 'QA Automation'],
    impact: 'Reduced manual QA overhead'
  },
  {
    id: 'fuzzy-mapping',
    date: '2025-06-09',
    title: 'Automated File Mapping',
    description: 'Engineered FuzzyWuzzy-based script to auto-map .egp to .flw files, enabling rapid artifact lookup for analysts',
    technologies: ['FuzzyWuzzy', 'Python', 'File Mapping'],
    impact: '90% reduction in manual mapping effort'
  },
  {
    id: 'script-debugging',
    date: '2025-06-11',
    title: 'Critical Issue Resolution',
    description: 'Identified and resolved edge cases in _acct suffix remediation script affecting primary/secondary key handling',
    technologies: ['Python Debugging', 'Script Analysis'],
    impact: 'Enhanced migration reliability'
  },
  {
    id: 'automation-script',
    date: '2025-07-11',
    title: 'Remediation Automation',
    description: 'Developed comprehensive automation script for _acct suffix appending with intelligent primary/secondary detection',
    technologies: ['Python', 'File Traversal', 'Automation'],
    impact: 'Streamlined pipeline standardization'
  },
  {
    id: 'reports-testing',
    date: '2025-07-25',
    title: 'Enterprise Reports Validation',
    description: 'Conducted thorough testing of 50+ SAS Viya reports, identifying visualization gaps and migration inconsistencies',
    technologies: ['SAS Viya Reports', 'QA Testing', 'Visualization'],
    impact: 'Ensured report fidelity post-migration'
  },
  {
    id: 'final-validation',
    date: '2025-07-31',
    title: 'Post-Migration Validation',
    description: 'Completed comprehensive re-testing of enterprise reports following backend driver updates, ensuring system stability',
    technologies: ['System Testing', 'Backend Integration'],
    impact: 'Validated migration readiness for production'
  },
  {
    id: 'performance-benchmarking',
    date: '2025-08-15',
    title: 'Infrastructure Performance Study',
    description: 'Executed SAS macro scripts for AWS Redshift vs SAS Viya benchmarking, achieving 36x performance improvements (3h → 5m)',
    technologies: ['SAS Macros', 'AWS Redshift', 'Performance Analysis'],
    impact: 'Informed strategic migration decisions'
  }
]

export default milestones