'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Download, Mail, MapPin, Phone } from 'lucide-react'
import { profile, socials, type SocialIcon } from '@/data/portfolio'
import { Github, Linkedin, Whatsapp } from './ui/brand-icons'
import { PhotoPanel } from './photo-panel'
import { Magnetic } from './ui/motion'

const iconMap: Record<SocialIcon, React.ComponentType<{ size?: number }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Mail,
  mail: Mail,
  phone: Phone,
  whatsapp: Whatsapp,
}

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    if (!deleting && text === word) {
      const t = window.setTimeout(() => setDeleting(true), 1800)
      return () => window.clearTimeout(t)
    }
    if (deleting && text === '') {
      const t = window.setTimeout(() => {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      }, 120)
      return () => window.clearTimeout(t)
    }

    const t = window.setTimeout(
      () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
      deleting ? 55 : 95,
    )
    return () => window.clearTimeout(t)
  }, [text, deleting, index, words])

  return (
    <span className="text-gradient">
      {text}
      <span className="animate-blink ml-0.5 inline-block h-[1.05em] w-[3px] translate-y-[0.16em] bg-neon" />
    </span>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(7px)'])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center px-5 pt-28 pb-24 sm:px-8 sm:pt-32"
    >
      <motion.div
        style={{ y, opacity, scale, filter: blur }}
        className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
      >
        <div className="text-center lg:text-left">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="glass group inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-1.5 text-xs text-white/70 transition-colors hover:text-white"
          >
            <span className="relative flex h-6 w-6 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-lime/70" />
              <span className="absolute h-2 w-2 rounded-full bg-lime" />
            </span>
            <span className="font-medium">{profile.availability}</span>
          </motion.a>

          <h1 className="mt-7 font-display text-[clamp(2.6rem,8.5vw,5.5rem)] font-extrabold leading-[0.94] tracking-tight lg:text-[clamp(3.2rem,6vw,5.2rem)]">
            <span className="sr-only">{profile.name}</span>

            <span aria-hidden className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="block text-white/92"
              >
                {profile.firstName}
              </motion.span>
            </span>
            <span aria-hidden className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="block text-gradient"
              >
                {profile.lastName}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-5 min-h-9 font-display text-lg font-medium sm:text-2xl"
          >
            <Typewriter words={profile.roles} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mx-auto mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-white/55 lg:mx-0"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Magnetic>
              <a
                href="#work"
                data-cursor="view"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-neon to-violet px-7 py-3.5 font-display text-sm font-semibold text-void"
              >
                <span className="absolute inset-0 translate-y-full bg-white/25 transition-transform duration-500 group-hover:translate-y-0" />
                <span className="relative">See my work</span>
              </a>
            </Magnetic>

            <Magnetic strength={9}>
              <a
                href="#contact"
                data-cursor="say hi"
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-semibold text-white/85 transition-colors hover:border-neon/45 hover:text-white"
              >
                Get in touch
              </a>
            </Magnetic>

            <Magnetic strength={9}>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                data-cursor="cv"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 font-display text-sm font-semibold text-white/65 transition-colors hover:border-neon/45 hover:text-white"
              >
                <Download size={15} />
                Résumé
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-white/40 lg:justify-start"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-neon/70" />
              {profile.location} · {profile.timezone}
            </span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-4">
              {socials.map((s) => {
                const Icon = iconMap[s.icon]
                const external = s.icon !== 'mail' && s.icon !== 'phone'
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer noopener' : undefined}
                    aria-label={s.name}
                    className="text-white/45 transition-all hover:-translate-y-0.5 hover:text-neon"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <div className="order-last lg:order-none">
          <PhotoPanel />
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        style={{ opacity }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <span className="animate-scroll-hint flex h-11 w-7 items-start justify-center rounded-full border border-white/18 pt-2">
          <span className="h-2 w-0.5 rounded-full bg-neon/70" />
        </span>
      </motion.a>
    </section>
  )
}
