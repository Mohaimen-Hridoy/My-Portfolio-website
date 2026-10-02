'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export function Backdrop() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-void" />
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

      <motion.div
        style={{ y: y1 }}
        className="animate-pulse-glow absolute -top-32 -left-40 h-[34rem] w-[34rem] rounded-full bg-neon/12 blur-[130px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="animate-pulse-glow absolute top-[38%] -right-40 h-[38rem] w-[38rem] rounded-full bg-violet/14 blur-[140px] [animation-delay:1.1s]"
      />
      <motion.div
        style={{ y: y1 }}
        className="animate-pulse-glow absolute -bottom-52 left-[30%] h-[30rem] w-[30rem] rounded-full bg-magenta/10 blur-[130px] [animation-delay:2s]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,transparent_35%,var(--color-void)_78%)]" />
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>
  )
}
