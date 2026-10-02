const items = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'Prisma',
  'PostgreSQL',
  'Tailwind',
  'TanStack Query',
  'Zod',
  'JWT',
  'Stripe',
  'Cloudinary',
  'Git',
]

export function Marquee() {
  return (
    <div className="relative border-y border-white/8 bg-ink/40 py-5 backdrop-blur-sm">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10">
              <span className="font-display text-sm font-semibold whitespace-nowrap text-white/35 transition-colors hover:text-white/80 sm:text-base">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-neon to-violet" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
