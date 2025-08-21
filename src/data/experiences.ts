export interface Experience {
  id: string
  title: string
  when: string
  summary: string
  tech: string[]
  impact: string
  category: 'technical' | 'process' | 'architecture' | 'leadership'
  links?: Array<{ label: string; url: string }>
}

export const experiences: Experience[] = [
  {
    id: 'sas-viya-architecture',
    title: 'Enterprise SAS Viya Architecture',
    when: 'May-Aug 2025',
    summary: 'Mastered SAS Viya ecosystem including Kubernetes orchestration, AWS IST logical architecture, pod management, and enterprise reporting workflows',
    tech: ['SAS Viya', 'Kubernetes', 'AWS IST', 'Pod Architecture'],
    impact: 'Deep understanding of enterprise analytics infrastructure supporting 14.5M Ontario residents',
    category: 'architecture'
  },
  {
    id: 'pipeline-automation',
    title: 'Enterprise Pipeline Automation',
    when: 'June-July 2025',
    summary: 'Engineered comprehensive Python automation toolkit for 20K+ SAS Viya pipeline mapping, standardization, and validation across province-wide systems',
    tech: ['Python', 'Pandas', 'FuzzyWuzzy', 'SAS .flw/.egp'],
    impact: 'Reduced manual mapping by 90%, enabling 1000+ analysts to deliver consistent analytics',
    category: 'technical'
  },
  {
    id: 'performance-optimization',
    title: 'Infrastructure Performance Analysis',
    when: 'August 2025',
    summary: 'Conducted rigorous benchmarking using SAS macro scripts on Enterprise Guide 8.5, comparing AWS Redshift vs SAS Viya performance characteristics',
    tech: ['SAS Macros', 'Enterprise Guide 8.5', 'AWS Redshift', 'Performance Testing'],
    impact: 'Achieved 36x faster runtimes (3h → 5m), informing critical migration strategy decisions',
    category: 'technical'
  },
  {
    id: 'qa-automation',
    title: 'Quality Assurance Framework',
    when: 'June-July 2025',
    summary: 'Developed comprehensive pytest validation suite and testing methodologies to ensure migration stability and reduce manual QA overhead',
    tech: ['pytest', 'Python Testing', 'QA Automation', 'Script Validation'],
    impact: 'Standardized testing protocols supporting cross-functional migration teams',
    category: 'process'
  },
  {
    id: 'organizational-learning',
    title: 'Enterprise Team Dynamics',
    when: 'May-Aug 2025',
    summary: 'Navigated complex organizational hierarchy within BIBA unit, understanding reporting structures from analysts to directors and collaborative decision-making processes',
    tech: ['Team Collaboration', 'Agile Methodology', 'Daily Scrums', 'Documentation'],
    impact: 'Enhanced team communication effectiveness and project delivery transparency',
    category: 'leadership'
  },
  {
    id: 'process-improvement',
    title: 'Workflow Enhancement Initiatives',
    when: 'Ongoing',
    summary: 'Identified opportunities for workspace optimization, deadline management, and co-op student integration to maximize contribution impact and team effectiveness',
    tech: ['Process Design', 'Team Leadership', 'Onboarding Optimization'],
    impact: 'Proposed systematic improvements for enhanced productivity and student engagement',
    category: 'leadership'
  }
]

// Professional recommendations for organizational enhancement
export const recommendations = {
  Workspace: [
    'Modernize office environment with collaborative spaces and improved lighting',
    'Implement milestone celebration culture to recognize team achievements',
    'Establish regular civil discourse forums for knowledge sharing'
  ],
  Process: [
    'Introduce structured sprint deadlines to accelerate delivery cycles',
    'Enhance co-op student onboarding with comprehensive mentorship programs',
    'Create impactful project allocation framework for student contributors',
    'Implement systematic check-in protocols for continuous guidance'
  ],
  Talent: [
    'Recruit specialized technical talent for complex migration initiatives',
    'Develop cross-training programs to build team versatility',
    'Establish clear career progression pathways within technical roles'
  ]
}

export default experiences