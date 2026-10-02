'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { skills, type Tech } from '@/data/portfolio'
import { Reveal, SectionLabel } from './ui/motion'

function TechIcon({ tech }: { tech: Tech }) {
  const [failed, setFailed] = useState(false)

  return (
    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center">
      {failed ? (
        <span className="font-display text-sm font-extrabold text-white/50">
          {tech.name.slice(0, 2).toUpperCase()}
        </span>
      ) : (
        <Image
          src={tech.icon}
          alt=""
          aria-hidden
          width={32}
          height={32}
          unoptimized
          onError={() => setFailed(true)}
          className="h-8 w-8 object-contain opacity-75 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
        />
      )}
    </span>
  )
}

export function Skills() {
  const [active, setActive] = useState(0)
  const group = skills[active]

  return (
    <section id="skills" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel index="02" text="Stack" />
          <h2 className="font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold tracking-tight text-white/92">
            The tools behind the{' '}
            <span className="text-gradient">finished product</span>.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/45">
            A focused view of the stack I use most, from the first interface to the deployed API
            and the data layer underneath.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`relative rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-colors ${
                  active === i ? 'text-void' : 'text-white/55 hover:text-white'
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="skill-tab"
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${s.accent}`}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{s.title}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="relative mt-8">
          <div
            className={`absolute -inset-x-6 -top-8 h-40 rounded-[3rem] bg-gradient-to-r ${group.accent} opacity-[0.07] blur-3xl transition-all duration-700`}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-6 text-sm text-white/40">{group.caption}</p>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 14, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: 0.05 * i,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -4 }}
                    className="glass group relative flex items-center gap-4 overflow-hidden rounded-2xl px-5 py-4 transition-colors duration-400 hover:border-white/25"
                  >
                    <div
                      className={`absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b ${group.accent} opacity-0 transition-opacity duration-400 group-hover:opacity-100`}
                    />
                    <TechIcon tech={tech} />
                    <span className="font-display text-[15px] font-medium text-white/75 transition-colors group-hover:text-white">
                      {tech.name}
                    </span>

                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
