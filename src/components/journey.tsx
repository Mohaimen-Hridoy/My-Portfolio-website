'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { education, experiences, focusAreas } from '@/data/portfolio'
import { Reveal, SectionLabel } from './ui/motion'

export function Journey() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 55%'],
  })
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 26 })

  return (
    <section id="journey" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="04" text="Journey" />
          <h2 className="font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold tracking-tight text-white/92">
            Where I have <span className="text-gradient">been</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-14 pl-8 sm:pl-14">
          <div className="absolute top-2 bottom-2 left-[7px] w-px bg-white/10 sm:left-[11px]" />
          <motion.div
            className="absolute top-0 left-[7px] h-full w-px origin-top bg-gradient-to-b from-neon via-violet to-magenta sm:left-[11px]"
            style={{ scaleY: line }}
          />
          <div className="space-y-14">
            {experiences.map((exp) => (
              <Reveal key={exp.role} delay={0.08}>
                <div className="relative">
                  <span className="absolute top-1.5 -left-8 flex h-4 w-4 items-center justify-center sm:-left-14">
                    <span className="absolute h-4 w-4 rounded-full bg-void" />
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-neon to-violet shadow-[0_0_14px_2px_rgba(168,85,247,0.45)]" />
                  </span>

                  <div className="glass rounded-2xl p-6 transition-colors duration-500 hover:border-violet/35 sm:p-7">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-display text-base font-bold text-white/92">
                        {exp.role}
                      </h3>
                      <span className="text-white/25">@</span>
                      <span className="text-sm font-medium text-neon">{exp.company}</span>
                    </div>

                    <p className="mt-1.5 font-mono text-[11px] tracking-wider text-white/35">
                      {exp.period} · {exp.location}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {exp.points.map((p, pi) => (
                        <li
                          key={pi}
                          className="flex gap-3 text-[13.5px] leading-relaxed text-white/50"
                        >
                          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-neon/70" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-white/8 px-2 py-1 font-mono text-[10.5px] text-white/42"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <h3 className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
                Education
              </h3>
              <div className="mt-5 space-y-4">
                {education.map((e) => (
                  <div key={e.degree} className="glass rounded-2xl p-6">
                    <h4 className="font-display text-sm font-bold text-white/90">{e.degree}</h4>
                    <p className="mt-1 text-sm text-neon/85">{e.school}</p>
                    <p className="mt-2.5 font-mono text-[11px] tracking-wider text-white/35">
                      {e.period}
                    </p>
                    <p className="mt-3 text-[13px] leading-relaxed text-white/48">{e.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <h3 className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
                Where I am heading
              </h3>
              <div className="mt-5 space-y-3">
                {focusAreas.map((f, i) => (
                  <div
                    key={f.title}
                    className="glass group rounded-2xl p-5 transition-colors duration-500 hover:border-lime/30"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] text-lime/70">
                        0{i + 1}
                      </span>
                      <h4 className="font-display text-sm font-bold text-white/90">{f.title}</h4>
                    </div>
                    <p className="mt-2 pl-7 text-[13px] leading-relaxed text-white/48">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
