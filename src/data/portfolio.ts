/**
 * ============================================================
 *  EDIT ONLY THIS FILE TO CUSTOMISE YOUR PORTFOLIO
 *  Everything renders from here automatically.
 * ============================================================
 */

export const profile = {
  name: 'Mohaimen Hridoy',
  firstName: 'Mohaimen',
  lastName: 'Hridoy',
  initials: 'MH',
  role: 'Full-Stack Developer',
  roles: [
    'Full-Stack Developer',
    'React & Next.js Engineer',
    'Node.js & API Architect',
    'Prisma + PostgreSQL',
  ],
  tagline:
    'I build complete web products: fast React interfaces, secure APIs and databases designed to last.',
  bio: [
    'I am a Computer Science & Engineering student at MIST who builds and ships full-stack products end to end: interface, API and database.',
    'I work with Next.js, React and TypeScript on the front end, then design Node.js and Express APIs with Prisma, PostgreSQL, authentication, payments and media workflows behind them.',
    'I care about the contract between client and server: predictable APIs, useful validation and products that work beyond the demo path.',
  ],
  location: 'Dhaka, Bangladesh',
  timezone: 'GMT+6',
  availability: 'Open to full-time roles',
  email: 'mohaimenhridoy@gmail.com',
  phone: '+880 1518-946779',
  whatsapp: '+880 1710-196083',
  resumeUrl: '/resume.pdf',
  avatarUrl: '/profile.png',
  github: 'https://github.com/Mohaimen-Hridoy',
  linkedin: 'https://linkedin.com/in/mohaimenhridoy',
  website: 'https://mohaimenhridoy.vercel.app',
}

export type SocialIcon =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'mail'
  | 'phone'
  | 'whatsapp'

export type Social = { name: string; url: string; icon: SocialIcon }

export const socials: Social[] = [
  { name: 'GitHub', url: profile.github, icon: 'github' },
  { name: 'LinkedIn', url: profile.linkedin, icon: 'linkedin' },
  { name: 'Email', url: `mailto:${profile.email}`, icon: 'mail' },
  { name: 'Phone', url: 'tel:+8801518946779', icon: 'phone' },
  { name: 'WhatsApp', url: 'https://wa.me/8801710196083', icon: 'whatsapp' },
]

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Stack', id: 'skills' },
  { label: 'Work', id: 'work' },
  { label: 'Journey', id: 'journey' },
  { label: 'Contact', id: 'contact' },
]

export const stats = [
  { value: 7, suffix: '', label: 'Full-stack products' },
  { value: 25, suffix: '', label: 'Public repositories' },
  { value: 6, suffix: '', label: 'Live deployments' },
  { value: 20, suffix: '+', label: 'Technologies used' },
]

export type Tech = {
  name: string
  icon: string
}

export type SkillGroup = {
  title: string
  caption: string
  accent: string
  items: Tech[]
}

const devicon = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`

const simple = (slug: string, color = 'A78BFA') =>
  `https://cdn.simpleicons.org/${slug}/${color}`

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    caption: 'Interfaces users actually enjoy',
    accent: 'from-neon to-cyan-400',
    items: [
      { name: 'React 19', icon: devicon('react') },
      { name: 'Next.js', icon: devicon('nextjs') },
      { name: 'TypeScript', icon: devicon('typescript') },
      { name: 'Tailwind', icon: devicon('tailwindcss') },
      { name: 'Vite', icon: devicon('vitejs') },
      { name: 'Framer Motion', icon: simple('framer', '22D3EE') },
      { name: 'TanStack Query', icon: simple('tanstack', '22D3EE') },
      { name: 'Zustand', icon: simple('zustand', '22D3EE') },
      { name: 'React Router', icon: simple('reactrouter', '22D3EE') },
      { name: 'Radix UI', icon: simple('radixui', '22D3EE') },
    ],
  },
  {
    title: 'Backend',
    caption: 'APIs that hold their shape',
    accent: 'from-violet to-fuchsia-400',
    items: [
      { name: 'Node.js', icon: devicon('nodejs') },
      { name: 'Express', icon: devicon('express') },
      { name: 'Zod', icon: simple('zod') },
      { name: 'JSON Web Token', icon: simple('jsonwebtokens', '0F172A') },
      { name: 'Google OAuth', icon: simple('google') },
      { name: 'Firebase', icon: devicon('firebase') },
      { name: 'Stripe', icon: simple('stripe', '635BFF') },
      { name: 'Socket.IO', icon: simple('socketdotio') },
    ],
  },
  {
    title: 'Database',
    caption: 'Schemas that age well',
    accent: 'from-magenta to-pink-400',
    items: [
      { name: 'PostgreSQL', icon: devicon('postgresql') },
      { name: 'Prisma', icon: simple('prisma', '2D3748') },
      { name: 'MongoDB', icon: devicon('mongodb') },
      { name: 'Redis', icon: simple('redis', 'DC382D') },
      { name: 'Cloudinary', icon: simple('cloudinary', '3448C5') },
      { name: 'Supabase', icon: devicon('supabase') },
    ],
  },
  {
    title: 'Tooling',
    caption: 'Ship it, version it, track it',
    accent: 'from-lime to-emerald-400',
    items: [
      { name: 'Git', icon: devicon('git') },
      { name: 'GitHub', icon: devicon('github') },
      { name: 'Vercel', icon: devicon('vercel') },
      { name: 'Docker', icon: devicon('docker') },
      { name: 'Postman', icon: simple('postman', 'FF6C37') },
      { name: 'GitHub Actions', icon: simple('githubactions', '4B8B3B') },
      { name: 'ESLint', icon: simple('eslint', '4B8B3B') },
      { name: 'Python', icon: devicon('python') },
      { name: 'C++', icon: devicon('cplusplus') },
    ],
  },
]

export type Project = {
  title: string
  category: string
  description: string
  tech: string[]
  liveUrl: string
  repoUrl: string
  gradient: string
  impact: string
  badge?: string
  year: string
}

export const projects: Project[] = [
  {
    title: 'FixMate',
    category: 'Full-Stack Service Marketplace',
    description:
      'A production-ready marketplace connecting customers with local service providers. The Next.js frontend carries a custom "job-ticket" design system, search and filtering, booking flows and role-based dashboards for admin, provider and customer; the Express + Prisma backend handles authentication, review moderation and real database-backed analytics.',
    tech: ['Next.js', 'TypeScript', 'React Hook Form', 'Express', 'Prisma', 'PostgreSQL', 'Stripe'],
    impact: 'Role-based dashboards, booking flows and Stripe-ready marketplace architecture.',
    liveUrl: 'https://fix-mate-frontend-three.vercel.app',
    repoUrl: 'https://github.com/Mohaimen-Hridoy/FixMate-frontend',
    gradient: 'from-neon/30 via-violet/20 to-transparent',
    badge: 'Full-Stack',
    year: '2025',
  },
  {
    title: 'GearUp',
    category: 'Full-Stack Booking Platform',
    description:
      'A booking platform built on a "field journal" design language. The client side uses TanStack Query for server state, Zustand for local state and Stripe Elements for checkout; the Express + Prisma API handles scheduling, JWT authentication and Stripe webhook processing.',
    tech: ['Next.js', 'TanStack Query', 'Zustand', 'Stripe', 'Express', 'Prisma'],
    impact: 'Server-state booking flows with authenticated checkout and webhook processing.',
    liveUrl: 'https://gear-up-eta.vercel.app',
    repoUrl: 'https://github.com/Mohaimen-Hridoy/GearUp-Backend',
    gradient: 'from-violet/30 via-magenta/20 to-transparent',
    badge: 'Full-Stack',
    year: '2025',
  },
  {
    title: 'RentNest',
    category: 'Full-Stack Rental Platform',
    description:
      'A platform connecting landlords with tenants. The React client handles listings, filters and image-rich property views; the Express backend manages rental listings, tenant requests and media uploads streamed through Multer straight into Cloudinary.',
    tech: ['React', 'Vite', 'TanStack Query', 'Express', 'pg', 'Cloudinary', 'Multer'],
    impact: 'Searchable rental listings with tenant requests and Cloudinary media uploads.',
    liveUrl: 'https://rentnest-tau-three.vercel.app',
    repoUrl: 'https://github.com/Mohaimen-Hridoy/RentNest-Backend',
    gradient: 'from-lime/25 via-neon/20 to-transparent',
    badge: 'Full-Stack',
    year: '2025',
  },
  {
    title: 'Apollo — Housing & Roommate Platform',
    category: 'Backend API',
    description:
      'A production-quality Express + TypeScript service powering the Apollo client app. Prisma and PostgreSQL for the relational core, Zod on every request boundary, JWT access/refresh rotation, Google OAuth, Stripe PaymentIntents with webhooks, soft deletes and audit logging.',
    tech: ['Node.js 20', 'Express', 'TypeScript', 'Prisma 6', 'PostgreSQL', 'Zod', 'Stripe'],
    impact: 'Typed API boundaries with refresh-token auth, payments and audit logging.',
    liveUrl: 'https://housing-roommate-platform-backend.vercel.app',
    repoUrl: 'https://github.com/Mohaimen-Hridoy/Housing-Roommate-Platform-backend',
    gradient: 'from-cyan-400/25 via-violet/20 to-transparent',
    badge: 'Backend',
    year: '2025',
  },
  {
    title: 'Jolshiri Smart City',
    category: 'Mobile + Backend',
    description:
      'A Flutter client for smart-city services backed by a hardened Express API. The mobile app handles service requests and user flows while the backend runs Prisma persistence, Cloudinary media, Firebase Admin push notifications, Stripe payments and nodemailer email.',
    tech: ['Flutter', 'Dart', 'Express', 'Prisma', 'Firebase', 'Stripe', 'Nodemailer'],
    impact: 'Mobile service workflows backed by notifications, payments and media handling.',
    liveUrl: '',
    repoUrl: 'https://github.com/Mohaimen-Hridoy/Jolshiri-backend',
    gradient: 'from-fuchsia-500/25 via-magenta/20 to-transparent',
    badge: 'Full-Stack',
    year: '2025',
  },
  {
    title: 'Movie Explorer',
    category: 'Frontend Application',
    description:
      'A responsive movie and TV discovery app on React 19 with React Router routing, live data from the TVMaze API, real-time search filtering, detail pages and an interactive modal — fully responsive across mobile and desktop.',
    tech: ['React 19', 'React Router', 'Tailwind CSS', 'Vite', 'TVMaze API'],
    impact: 'Responsive discovery experience with live search, routing and detail views.',
    liveUrl: 'https://movie-explorer-murex-six.vercel.app',
    repoUrl: 'https://github.com/Mohaimen-Hridoy/Movie-Explorer',
    gradient: 'from-violet/25 via-neon/15 to-transparent',
    badge: 'Frontend',
    year: '2024',
  },
  {
    title: 'DevPulse',
    category: 'Issue Tracker API',
    description:
      'A collaborative issue and feature tracker for software teams. Express + TypeScript over PostgreSQL using the native pg driver, with bcrypt password hashing at 8–12 rounds, JWT-based authentication and a clean REST surface for reporting and resolving issues.',
    tech: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'bcrypt', 'JWT'],
    impact: 'Authenticated REST workflows for reporting and resolving team issues.',
    liveUrl: 'https://dev-pulse-ashen-zeta.vercel.app',
    repoUrl: 'https://github.com/Mohaimen-Hridoy/devpulse',
    gradient: 'from-neon/20 via-cyan/15 to-transparent',
    badge: 'Backend',
    year: '2024',
  },
  {
    title: 'MIST Rangers',
    category: 'Python Project',
    description:
      'An academic Python project from my CSE studies at MIST, applying core programming and algorithmic fundamentals to a complete standalone solution.',
    tech: ['Python', 'Algorithms', 'Problem Solving'],
    impact: 'Standalone academic project applying core algorithms and problem-solving skills.',
    liveUrl: '',
    repoUrl: 'https://github.com/Mohaimen-Hridoy/MIST_Rangers',
    gradient: 'from-lime/20 via-cyan/15 to-transparent',
    badge: 'Python',
    year: '2024',
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  points: string[]
  stack: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Full-Stack Product Development',
    company: 'Personal Projects',
    period: '2024 — Present',
    location: 'Dhaka, BD',
    points: [
      'Shipped seven complete products spanning service marketplaces, rental platforms, booking systems, mobile apps and issue trackers.',
      'Built every product across the full stack — Next.js and React on the client, Express and Node.js on the server, PostgreSQL managed through Prisma in between.',
      'Designed the contract between client and server myself: typed API surfaces, Zod validation at every boundary, and shared schemas so the two halves never drift apart.',
      'Implemented JWT auth with refresh rotation, role-based access control, Stripe payment flows with webhooks, and Cloudinary media pipelines.',
      'Deployed each service to Vercel with environment-based configuration and documented the full setup in every repository README.',
    ],
    stack: ['Next.js', 'React', 'Express', 'Prisma', 'PostgreSQL', 'Stripe', 'Zod'],
  },
  {
    role: 'Industrial Training',
    company: 'ICT & Enterprise Systems',
    period: 'Completed',
    location: 'Dhaka, BD',
    points: [
      'Gained hands-on exposure to enterprise networking, system administration, billing systems and digital service platforms.',
      'Worked directly with internal tooling used in production environments.',
    ],
    stack: ['Networking', 'System Administration', 'Enterprise Tools'],
  },
]

export const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    school: 'Military Institute of Science and Technology (MIST)',
    period: 'Present',
    detail:
      'Coursework across algorithms, databases, operating systems and software engineering, with a self-directed focus on full-stack application architecture.',
  },
]

export const focusAreas = [
  {
    title: 'Full-Stack Architecture',
    description:
      'Keeping the client and server contract clean — typed APIs, predictable error shapes, and data fetching that stays fast as the product grows.',
  },
  {
    title: 'System Design',
    description:
      'How applications scale past a single server: caching, queues, consistency models, and knowing when to reach for a more complex design.',
  },
  {
    title: 'Higher Studies',
    description:
      'Planning further study abroad, with distributed systems and computer architecture as focus areas.',
  },
]

export const services = [
  {
    title: 'Frontend Engineering',
    description:
      'React and Next.js interfaces built with TypeScript, real server-state management, form validation and responsive layouts that hold up on any screen.',
  },
  {
    title: 'Backend & APIs',
    description:
      'Express and Node.js services with clean REST contracts, Zod validation, JWT auth, RBAC, rate limiting and structured logging.',
  },
  {
    title: 'Database Design',
    description:
      'Normalised PostgreSQL schemas via Prisma, meaningful constraints, migrations you can trust, and queries that stay fast as the data grows.',
  },
  {
    title: 'End-to-End Shipping',
    description:
      'Deployment, environment configuration and documentation — so the thing actually runs, not just the demo path.',
  },
]

export const seo = {
  title: 'Mohaimen Hridoy — Full-Stack Developer',
  description:
    'Full-stack developer specialising in React, Next.js, Node.js, Express, Prisma and PostgreSQL. Building complete, production-ready web products.',
  keywords: [
    'Mohaimen Hridoy',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Express',
    'Prisma',
    'PostgreSQL',
    'Bangladesh Developer',
    'MIST CSE',
  ],
  url: 'https://mohaimenhridoy.vercel.app',
}
