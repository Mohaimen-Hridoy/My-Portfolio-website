'use client'

import { profile, services, stats } from '@/data/portfolio'
import { CountUp, Reveal, SectionLabel } from './ui/motion'

export function About() {
  return (
    <section id="about" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="01" text="About" />
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <Reveal delay={0.08}>
              <h2 className="font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold leading-[1.1] tracking-tight text-white/92">
                Full-stack work that holds up{' '}
                <span className="text-gradient">end to end</span>.
              </h2>
            </Reveal>

            <div className="mt-7 space-y-5">
              {profile.bio.map((p, i) => (
                <Reveal key={i} delay={0.14 + i * 0.08}>
                  <p className="text-[15px] leading-[1.85] text-white/55">{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.1 * i}>
                  <div className="border-l border-white/10 pl-4">
                    <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-xs leading-snug text-white/40">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={0.1 * i}>
                <div className="glass group relative overflow-hidden rounded-2xl p-6 transition-colors duration-500 hover:border-neon/35">
                  <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-violet/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <span className="mt-1 font-mono text-xs text-neon/60">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-white/90">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-white/50">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
