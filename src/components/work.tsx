'use client'

import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/data/portfolio'
import { Github } from './ui/brand-icons'
import { Reveal, SectionLabel, Tilt } from './ui/motion'

function Card({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={0.06 * index} className="h-full">
      <Tilt
        strength={5}
        className="group glass relative flex h-full flex-col overflow-hidden rounded-3xl transition-colors duration-500 hover:border-neon/30"
      >
        <div
          className={`relative flex h-40 shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
        >
          <div className="w-[72%] max-w-xs -rotate-2 overflow-hidden rounded-xl border border-white/15 bg-void/60 shadow-2xl backdrop-blur transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.03]">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-magenta/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-lime/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-neon/80" />
              <span className="ml-2 truncate font-mono text-[8px] text-white/35">
                {project.title}
              </span>
            </div>
            <div className="grid grid-cols-[0.8fr_1.2fr] gap-3 p-3">
              <div className="space-y-2">
                <div className="h-2 w-4/5 rounded-full bg-white/25" />
                <div className="h-1.5 w-full rounded-full bg-white/10" />
                <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
              </div>
              <div className="space-y-2">
                <div className="h-10 rounded-lg bg-gradient-to-br from-white/15 to-white/[0.03]" />
                <div className="flex gap-1.5">
                  <div className="h-1.5 w-1/2 rounded-full bg-neon/45" />
                  <div className="h-1.5 w-1/3 rounded-full bg-violet/45" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />

          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/12 bg-void/70 px-3 py-1 font-mono text-[10px] tracking-wider text-white/65 backdrop-blur">
              {project.badge}
            </span>
            <span className="rounded-full border border-white/12 bg-void/70 px-3 py-1 font-mono text-[10px] tracking-wider text-white/45 backdrop-blur">
              {project.year}
            </span>
          </div>

          <div className="absolute top-4 right-4 flex gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} source code`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-void/70 text-white/70 backdrop-blur transition-colors hover:border-neon/50 hover:text-neon"
              >
                <Github size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} live site`}
                data-cursor="open"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-void/70 text-white/70 backdrop-blur transition-colors hover:border-neon/50 hover:text-neon"
              >
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-[10px] tracking-[0.2em] text-neon/55 uppercase">
            {project.category}
          </p>
          <h3 className="mt-1.5 font-display text-lg font-bold text-white/92 transition-colors group-hover:text-neon">
            {project.title}
          </h3>
          <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-white/48">
            {project.description}
          </p>
          <p className="mt-4 border-l border-neon/35 pl-3 text-xs leading-relaxed text-neon/70">
            {project.impact}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[10.5px] text-white/45"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-4 border-t border-white/8 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-neon/85 transition-colors hover:text-neon"
              >
                Live site <ArrowUpRight size={12} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white/45 transition-colors hover:text-white/80"
              >
                Source <ArrowUpRight size={12} />
              </a>
            )}
          </div>
        </div>
      </Tilt>
    </Reveal>
  )
}

export function Work() {
  return (
    <section id="work" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="03" text="Selected Work" />
        </Reveal>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.06}>
            <h2 className="max-w-lg font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold tracking-tight text-white/92">
              Products I have <span className="text-gradient">shipped</span>            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-xs text-sm leading-relaxed text-white/45">
              Every project below is live or open source — click through to the deployment or the
              repository.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Card key={p.title} project={p} index={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <a
              href="https://github.com/Mohaimen-Hridoy?tab=repositories"
              target="_blank"
              rel="noreferrer noopener"
              className="glass group inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-medium text-white/75 transition-colors hover:border-neon/45 hover:text-white"
            >
              See all 25 repositories on GitHub
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
