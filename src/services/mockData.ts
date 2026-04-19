import type {
  BlogPost,
  Destination,
  ProcessStep,
  ServiceItem,
  TeamMember,
  Testimonial,
  University,
} from '../types'

/** Full-width hero background (students / campus). */
export const heroBackgroundImage = {
  src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80',
  alt: 'Diverse university students collaborating outdoors on campus',
}

/** About page — professional office / teamwork. */
export const aboutStudioImage = {
  src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
  alt: 'Bright modern office space with collaborative seating',
}

export const services: ServiceItem[] = [
  {
    id: 'placement',
    title: 'University placement',
    description:
      'Shortlist programs, refine your personal statement, and submit strong applications with structured timelines and document checklists.',
    iconClass: 'bi-mortarboard',
    imageSrc: 'https://images.unsplash.com/photo-1434030216411-0b793f744b41?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Laptop and notebook on a desk during study planning',
  },
  {
    id: 'visa',
    title: 'Visa guidance',
    description:
      'Financial evidence, credibility interviews, and CAS/LOA requirements explained in plain language so you feel prepared—not overwhelmed.',
    iconClass: 'bi-passport',
    imageSrc: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Airplane wing above clouds representing international travel',
  },
  {
    id: 'career',
    title: 'Career counseling',
    description:
      'Align your strengths with employable pathways, internships, and post-study options that match your long-term goals.',
    iconClass: 'bi-graph-up-arrow',
    imageSrc: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Colleagues collaborating over charts in a modern workspace',
  },
  {
    id: 'scholarship',
    title: 'Scholarship support',
    description:
      'Identify merit and need-based opportunities, craft competitive essays, and track deadlines across institutions.',
    iconClass: 'bi-award',
    imageSrc: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Students raising hands in a bright seminar classroom',
  },
]

export const destinations: Destination[] = [
  {
    id: 'uk',
    name: 'United Kingdom',
    flagEmoji: '🇬🇧',
    summary:
      'Globally recognized degrees, shorter course lengths, and strong graduate employability—ideal for focused learners.',
    highlights: ['1-year masters options', 'Strong STEM & business hubs', 'Post-study Graduate Route'],
    popularSubjects: ['Business', 'Engineering', 'Law', 'Health sciences'],
    imageSrc: 'https://images.unsplash.com/photo-1513635269976-596e1447262e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'London skyline with Big Ben and Westminster at sunset',
  },
  {
    id: 'canada',
    name: 'Canada',
    flagEmoji: '🇨🇦',
    summary:
      'High quality of life, welcoming communities, and clear pathways from study to skilled work experience.',
    highlights: ['Co-op programs', 'PGWP options', 'Diverse campuses'],
    popularSubjects: ['Computer science', 'Data analytics', 'Healthcare', 'Hospitality'],
    imageSrc: 'https://images.unsplash.com/photo-1517935701645-455cdfe57648?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Toronto cityscape with the CN Tower on a clear day',
  },
  {
    id: 'australia',
    name: 'Australia',
    flagEmoji: '🇦🇺',
    summary:
      'Research-led universities, vibrant cities, and practical courses designed with industry input.',
    highlights: ['Trimester intakes', 'Strong research funding', 'Student support services'],
    popularSubjects: ['IT', 'Environmental science', 'Nursing', 'Creative arts'],
    imageSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Sydney Opera House and harbour on a bright day',
  },
  {
    id: 'usa',
    name: 'United States',
    flagEmoji: '🇺🇸',
    summary:
      'Flexible curricula, extensive campus resources, and unmatched networking across industries.',
    highlights: ['Optional Practical Training (OPT)', 'Scholarship diversity', 'Interdisciplinary majors'],
    popularSubjects: ['STEM', 'Economics', 'Liberal arts', 'Medicine (pre-med)'],
    imageSrc: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Brooklyn Bridge and Manhattan skyline at dusk',
  },
]

export const universities: University[] = [
  {
    id: 'u1',
    name: 'Kingsbridge Metropolitan University',
    country: 'United Kingdom',
    description:
      'Research-intensive institution known for finance, public policy, and sustainable engineering partnerships.',
    initials: 'KMU',
  },
  {
    id: 'u2',
    name: 'Pacific Crest Institute of Technology',
    country: 'Canada',
    description:
      'Industry-linked co-op programs with strong placement support in AI, cybersecurity, and cloud infrastructure.',
    initials: 'PCIT',
  },
  {
    id: 'u3',
    name: 'Harbourview University',
    country: 'Australia',
    description:
      'Coastal campus strengths in marine biology, renewable energy, and digital health innovation labs.',
    initials: 'HU',
  },
  {
    id: 'u4',
    name: 'Franklin Atlantic College',
    country: 'United States',
    description:
      'Liberal arts core with STEM pathways, celebrated alumni network, and merit-based aid for international students.',
    initials: 'FAC',
  },
  {
    id: 'u5',
    name: 'Northgate Business School',
    country: 'United Kingdom',
    description:
      'Triple-accredited business school with consulting practicums and global exchange opportunities.',
    initials: 'NBS',
  },
  {
    id: 'u6',
    name: 'Summit Polytechnic',
    country: 'Canada',
    description:
      'Hands-on learning in advanced manufacturing, civil infrastructure, and applied computing.',
    initials: 'SP',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'APJ made the visa process predictable. I always knew what to prepare next, and I received my CAS guidance without last-minute panic.',
    author: 'Ananya R.',
    program: 'MSc Data Analytics',
    destination: 'United Kingdom',
    avatarSrc: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&h=200&q=80',
    avatarAlt: 'Portrait of a smiling student',
  },
  {
    id: 't2',
    quote:
      'They helped me balance ambitious reach schools with safer options. I accepted a scholarship offer I would have missed on my own.',
    author: 'Marcus T.',
    program: 'BEng Software Engineering',
    destination: 'Canada',
    avatarSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    avatarAlt: 'Portrait of a student in a casual shirt',
  },
  {
    id: 't3',
    quote:
      'Honest feedback on my essays and a clear timeline kept me accountable. The team responds quickly—huge relief for busy students.',
    author: 'Priya S.',
    program: 'MBA',
    destination: 'Australia',
    avatarSrc: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    avatarAlt: 'Portrait of a professional woman smiling',
  },
  {
    id: 't4',
    quote:
      'Career counseling sessions connected my internship goals to the right electives. I felt supported from shortlisting to arrival week.',
    author: 'Jordan L.',
    program: 'BA Economics',
    destination: 'United States',
    avatarSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80',
    avatarAlt: 'Portrait of a student in glasses',
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'How to build a credible Statement of Purpose (without sounding generic)',
    excerpt:
      'Admissions teams read thousands of essays. Here is a simple framework to show motivation, fit, and outcomes—tied to evidence.',
    category: 'Applications',
    date: '2026-03-12',
    readMinutes: 6,
  },
  {
    id: 'b2',
    title: 'UK vs Canada: choosing the right study destination for your goals',
    excerpt:
      'A practical comparison of timelines, costs, work rights, and campus culture—so you can decide with confidence.',
    category: 'Destinations',
    date: '2026-02-28',
    readMinutes: 8,
  },
  {
    id: 'b3',
    title: 'Scholarship deadlines most students overlook (and how to avoid them)',
    excerpt:
      'Separate institutional awards from external funding, and set reminders that match document lead times.',
    category: 'Funding',
    date: '2026-02-09',
    readMinutes: 5,
  },
  {
    id: 'b4',
    title: 'Visa interviews: 7 answers you should rehearse—calmly',
    excerpt:
      'Credibility interviews are not exams. They are consistency checks between your documents and your story.',
    category: 'Visa',
    date: '2026-01-21',
    readMinutes: 7,
  },
]

export const processSteps: ProcessStep[] = [
  {
    id: 'p1',
    step: 1,
    title: 'Discovery call',
    description:
      'We clarify your goals, budget, timeline, and destination preferences—then outline a realistic roadmap.',
  },
  {
    id: 'p2',
    step: 2,
    title: 'Profile & shortlisting',
    description:
      'Academic review, test planning (if needed), and a balanced university list with clear rationale for each choice.',
  },
  {
    id: 'p3',
    step: 3,
    title: 'Applications & essays',
    description:
      'Document compilation, statement iterations, references, and submission tracking with quality checks.',
  },
  {
    id: 'p4',
    step: 4,
    title: 'Offers & decisions',
    description:
      'Compare outcomes, negotiate timelines where possible, and confirm deposits with confidence.',
  },
  {
    id: 'p5',
    step: 5,
    title: 'Visa & pre-departure',
    description:
      'Financial evidence guidance, interview prep, accommodation pointers, and a smooth handoff to arrival planning.',
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: 'm1',
    name: 'Amelia Park-Jensen',
    role: 'Founder & Lead Counselor',
    bio: 'Former international admissions reader with 12+ years guiding STEM and business applicants across four regions.',
  },
  {
    id: 'm2',
    name: 'Rajiv Menon',
    role: 'Visa & Compliance Lead',
    bio: 'Specializes in credibility documentation, dependent cases, and complex financial evidence scenarios.',
  },
  {
    id: 'm3',
    name: 'Sofia Alvarez',
    role: 'Scholarships & Financial Aid',
    bio: 'Essay coach for competitive awards and institutional scholarships with a focus on storytelling and impact metrics.',
  },
  {
    id: 'm4',
    name: 'Daniel Okoro',
    role: 'Career Strategy',
    bio: 'Connects program selection to internships, licensing pathways, and early-career networking plans.',
  },
]

export const stats = [
  { label: 'Students advised', value: '2,400+' },
  { label: 'Partner institutions', value: '85+' },
  { label: 'Visa success rate', value: '98%' },
  { label: 'Avg. response time', value: '< 24h' },
]

export const countryOptions = destinations.map((d) => ({ value: d.name, label: `${d.flagEmoji} ${d.name}` }))
