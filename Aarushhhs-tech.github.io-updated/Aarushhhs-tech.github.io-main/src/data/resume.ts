// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: 'Aarush Sharma',
  role: 'General Engineering Student',
  school: 'Texas A&M University',
  location: 'College Station, TX',
  email: 'aarush_2730@tamu.edu',
  // TODO: replace with the real LinkedIn profile URL
  linkedin: 'https://www.linkedin.com/',
  resume: 'Aarush_Sharma_Resume.pdf',
  summary:
    'General Engineering student with hands-on experience in mechanical design, prototyping, and testing through rocketry and student engineering teams.',
};

export const stats = [
  { value: '3+', label: 'Successful test recoveries' },
  { value: '2', label: 'Vehicle teams joined at Texas A&M' },
  { value: '5', label: 'STEM podcast episodes produced' },
];

export type Experience = {
  org: string;
  role: string;
  dates: string;
  accent: 'sky' | 'mint' | 'peach' | 'lilac';
  points: string[];
  tags: string[];
  // Optional: shown inside the project pop-up when someone clicks a card
  details?: string;
  links?: { label: string; url: string }[];
};

export const experience: Experience[] = [
  {
    org: 'Eco Car Team',
    role: 'Apprentice Member · Texas A&M University',
    dates: 'Oct 2026 — Present',
    accent: 'peach',
    points: [
      'Selected as an apprentice member of the student team that designs and builds a high-efficiency vehicle, supporting the team while building experience in vehicle design.',
    ],
    tags: ['Vehicle Design', 'Teamwork'],
    // To add more to this project's pop-up, remove the // from the next two lines and edit them:
    // details: 'A longer paragraph about what you are working on goes here.',
    // links: [{ label: 'Photos', url: 'https://example.com' }],
  },
  {
    org: 'American Society of Mechanical Engineers (ASME)',
    role: 'Member · Texas A&M University',
    dates: 'Aug 2026 — Present',
    accent: 'mint',
    points: [
      "Participating in ASME's go-kart design and build program, applying mechanical design and fabrication skills.",
    ],
    tags: ['Mechanical Design', 'Fabrication'],
  },
  {
    org: 'American Rocketry Challenge & Aerospace Club',
    role: 'Recovery Systems & Engine Research Teams',
    dates: 'Aug 2023 — May 2025',
    accent: 'sky',
    points: [
      'Designed rocket recovery and landing components in Fusion 360, validating a shock-cord system through 3–4 test launches.',
      'Achieved 3 successful test recoveries and a successful recovery at the American Rocketry Challenge (ARC) by applying aerodynamics and structural-stability principles.',
      'Diagnosed recurring design failures with a 4-person team and implemented iterative fixes to improve recovery reliability.',
    ],
    tags: ['Fusion 360', 'Aerodynamics', 'Testing'],
  },
];

export const leadership = [
  {
    org: 'Nexify Initiative',
    role: 'Executive Team · STEM Podcast Manager',
    dates: 'Dec 2024 — May 2026',
    points: [
      'Produced 5 podcast episodes, conducting interviews with industry professionals in STEM fields.',
      'Translated technical topics into accessible content for a student audience, planning guests and episodes with the executive team.',
    ],
  },
  {
    org: 'Technology Student Association',
    role: 'Officer',
    dates: 'Aug 2024 — May 2026',
    points: [
      'Organized STEM activities and competitions for the chapter, overseeing logistics and timelines.',
      'Partnered with officers and advisors to plan events, boosting chapter participation in state-level competitions.',
    ],
  },
];

export const skills = [
  { group: 'CAD', accent: 'sky', items: ['Fusion 360', 'SolidWorks'] },
  { group: 'Programming', accent: 'lilac', items: ['Python', 'Java', 'MATLAB'] },
  {
    group: 'Engineering',
    accent: 'mint',
    items: ['Mechanical Design', 'Prototyping', 'Troubleshooting & Testing', 'Iterative Design'],
  },
  { group: 'Hands-On', accent: 'peach', items: ['Model Rocket Construction', 'Mechanical Assembly'] },
];

export const education = [
  {
    school: 'Texas A&M University',
    place: 'College Station, TX',
    degree: 'B.S. General Engineering',
    dates: 'Expected May 2030',
  },
  {
    school: 'Frisco High School',
    place: 'Frisco, TX',
    degree: 'High School Diploma',
    dates: 'May 2026',
  },
];

export const coursework = [
  'Calculus II',
  'General Chemistry',
  'ENGR 102',
  'PLTW Introduction to Engineering Design',
];

export const languages = ['English — Fluent', 'Hindi — Fluent'];
