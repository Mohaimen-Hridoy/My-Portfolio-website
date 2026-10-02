'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Mail,
  Phone,
  Send,
} from 'lucide-react'
import { profile, socials, type SocialIcon } from '@/data/portfolio'
import { Github, Linkedin, Whatsapp } from './ui/brand-icons'
import { Magnetic, Reveal, SectionLabel } from './ui/motion'

const iconMap: Record<SocialIcon, React.ComponentType<{ size?: number }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Mail,
  mail: Mail,
  phone: Phone,
  whatsapp: Whatsapp,
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1900)
    } catch {
      setCopied(false)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 4500)
  }

  return (
    <section id="contact" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel index="05" text="Contact" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal delay={0.08}>
            <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.06] tracking-tight text-white/92">
              Let us build something{' '}
              <span className="text-gradient">worth shipping</span>.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/50">
              Open to full-time roles, freelance full-stack work, and interesting conversations
              about products, APIs and system design. I reply to everything within a day or two.
            </p>

            <div className="mt-9 space-y-3">
              <button
                onClick={copyEmail}
                data-cursor="copy"
                className="glass group flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left transition-colors hover:border-neon/40"
              >
                <span className="flex items-center gap-3.5">
                  <Mail size={17} className="shrink-0 text-neon" />
                  <span className="font-mono text-[13px] break-all text-white/80 sm:text-sm">
                    {profile.email}
                  </span>
                </span>
                {copied ? (
                  <span className="flex shrink-0 items-center gap-1.5 text-xs text-lime">
                    <Check size={14} /> Copied
                  </span>
                ) : (
                  <Copy
                    size={15}
                    className="shrink-0 text-white/30 transition-colors group-hover:text-white/70"
                  />
                )}
              </button>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                data-cursor="cv"
                className="glass group flex items-center justify-between gap-4 rounded-2xl px-5 py-4 transition-colors hover:border-violet/40"
              >
                <span className="flex items-center gap-3.5 text-sm text-white/70">
                  <Download size={17} className="shrink-0 text-violet" />
                  Download my résumé
                </span>
                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                />
              </a>

              <div className="grid grid-cols-2 gap-3">
                {socials
                  .filter((s) => s.icon !== 'mail')
                  .map((s) => {
                    const Icon = iconMap[s.icon]
                    const external = s.icon !== 'phone'
                    return (
                      <a
                        key={s.name}
                        href={s.url}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noreferrer noopener' : undefined}
                        className="glass group flex items-center justify-between gap-2 rounded-2xl px-4 py-3.5 transition-colors hover:border-violet/40"
                      >
                        <span className="flex items-center gap-2.5 text-sm text-white/70">
                          <Icon size={15} />
                          {s.name}
                        </span>
                        <ArrowUpRight
                          size={13}
                          className="text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                        />
                      </a>
                    )
                  })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <form
              onSubmit={handleSubmit}
              className="glass relative overflow-hidden rounded-3xl p-7 sm:p-8"
            >
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your name" />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                </div>
                <Field label="Subject" name="subject" placeholder="What is this about?" />
                <label className="block">
                  <span className="font-mono text-[11px] tracking-[0.25em] text-white/40 uppercase">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="mt-2.5 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/85 placeholder:text-white/22 transition-colors outline-none focus:border-neon/55"
                  />
                </label>
              </div>

              <Magnetic strength={7} className="mt-6 inline-block w-full">
                <button
                  type="submit"
                  data-cursor="send"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-neon to-violet px-7 py-3.5 font-display text-sm font-semibold text-void"
                >
                  <span className="absolute inset-0 translate-y-full bg-white/25 transition-transform duration-500 group-hover:translate-y-0" />
                  <span className="relative flex items-center gap-2">
                    {sent ? (
                      <>
                        <Check size={16} /> Message sent
                      </>
                    ) : (
                      <>
                        <Send size={15} /> Send message
                      </>
                    )}
                  </span>
                </button>
              </Magnetic>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-center text-xs text-lime/85"
                >
                  Thanks — wire this form to Formspree or your own endpoint.
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] tracking-[0.25em] text-white/40 uppercase">
        {label}
      </span>
      <input
        required={name !== 'subject'}
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/85 placeholder:text-white/22 transition-colors outline-none focus:border-neon/55"
      />
    </label>
  )
}
