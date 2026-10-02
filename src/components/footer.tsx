'use client'

import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { navLinks, profile } from '@/data/portfolio'

export function Footer() {
  const [year] = useState(() => new Date().getFullYear())

  return (
    <footer className="relative overflow-hidden border-t border-white/8 px-5 pt-16 pb-8 sm:px-8">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-violet/12 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <a href="#home" className="group inline-flex items-baseline gap-1.5">
              <span className="font-display text-3xl font-extrabold tracking-tight text-white/90 transition-colors group-hover:text-neon sm:text-4xl">
                {profile.firstName}
                <span className="text-white/30 transition-colors group-hover:text-neon/60">
                  {profile.lastName}
                </span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/40">
              {profile.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-sm text-white/45 transition-colors hover:text-neon"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-5 border-t border-white/8 pt-6 sm:flex-row">
          <p className="font-mono text-[11px] tracking-wider text-white/28">
            © {year} {profile.name} — Built with Next.js, Tailwind &amp; Framer Motion
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/45 transition-all hover:border-neon/50 hover:text-neon"
          >
            <ArrowUp size={15} className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
