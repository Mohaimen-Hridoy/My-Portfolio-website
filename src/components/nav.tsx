'use client'

import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { navLinks, profile, socials, type SocialIcon } from '@/data/portfolio'
import { useActiveSection, useMediaQuery } from '@/hooks/use-ui'
import { Github, Linkedin, Twitter, Whatsapp } from './ui/brand-icons'

const iconMap: Record<SocialIcon, React.ComponentType<{ size?: number }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  phone: Phone,
  whatsapp: Whatsapp,
}

const ids = navLinks.map((l) => l.id)

export function Nav() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)
  const compact = useMediaQuery('(max-width: 860px)')

  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    return scrollY.on('change', (v) => {
      const prev = scrollY.getPrevious() ?? 0
      setScrolled(v > 40)
      setHidden(v > prev && v > 240 && !open)
    })
  }, [scrollY, open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -90 }}
        animate={{ y: hidden ? -130 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[120]"
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
            scrolled ? 'py-3' : 'py-6'
          }`}
        >
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="group relative z-10 flex items-center gap-2.5 font-display text-base font-bold tracking-tight"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neon via-violet to-magenta font-display text-xs font-extrabold text-void">
              {profile.initials}
            </span>
            <span className="hidden text-white/85 transition-colors group-hover:text-white sm:block">
              {profile.name}
            </span>
          </a>

          {!compact && (
            <nav className="glass absolute left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full px-2 py-1.5">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className={`relative rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
                    active === l.id ? 'text-void' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-neon to-violet"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              ))}
            </nav>
          )}

          <div className="relative z-10 flex items-center gap-2">
            {!compact &&
              socials.slice(0, 3).map((s) => {
                const Icon = iconMap[s.icon]
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-neon/50 hover:text-neon"
                  >
                    <Icon size={15} />
                  </a>
                )
              })}

            {compact && (
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-white"
              >
                {open ? <X size={17} /> : <Menu size={17} />}
              </button>
            )}
          </div>
        </div>

        <motion.div
          className="h-px origin-left bg-gradient-to-r from-neon via-violet to-magenta"
          style={{ scaleX: progress }}
        />
      </motion.header>

      <AnimatePresence>
        {open && compact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-void/96 backdrop-blur-2xl"
          >
            <nav className="flex h-full flex-col justify-center gap-1 px-8">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-baseline gap-4 border-b border-white/6 py-4 font-display text-3xl font-semibold text-white/80"
                >
                  <span className="font-mono text-xs text-neon/60">
                    0{i + 1}
                  </span>
                  {l.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex gap-4"
              >
                {socials.map((s) => {
                  const Icon = iconMap[s.icon]
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={s.name}
                      className="text-white/50 transition-colors hover:text-neon"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
