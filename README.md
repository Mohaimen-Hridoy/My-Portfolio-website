# Mohaimen Hridoy - Portfolio

Personal portfolio website for **Mohaimen Hridoy**, a full-stack developer and CSE student at MIST.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Highlights

- Responsive hero layout with desktop and mobile-specific composition
- Animated navigation, section reveals, marquee and custom cursor interactions
- Full-stack project showcase with live demos and source repositories
- Focused stack view covering frontend, backend, database and tooling
- Accessible focus states and reduced-motion support
- SEO metadata, sitemap, robots file and Person structured data
- Optimized for deployment on Vercel

## Tech Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run start    # Start the production server
```

## Customization

Portfolio content is centralized in [`src/data/portfolio.ts`](src/data/portfolio.ts). Update the profile, social links, skills, projects and experience there.

## Deployment

This is a standard Next.js application and can be deployed directly to [Vercel](https://vercel.com/new).

1. Import this GitHub repository into Vercel.
2. Keep the framework preset as **Next.js**.
3. Use `npm run build` as the production build command.
4. Deploy.

## Links

- Live portfolio: https://mohaimenhridoy.vercel.app
- GitHub: https://github.com/Mohaimen-Hridoy
- LinkedIn: https://linkedin.com/in/mohaimenhridoy
