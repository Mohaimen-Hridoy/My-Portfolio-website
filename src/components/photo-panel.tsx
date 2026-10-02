'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { profile } from '@/data/portfolio'

export function PhotoPanel() {
  const [failed, setFailed] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 3 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-sm lg:max-w-none"
    >
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-br from-neon/20 via-violet/22 to-magenta/18 blur-3xl animate-pulse-glow" />

      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <div className="rounded-[2rem] bg-gradient-to-br from-neon via-violet to-magenta p-[1.5px] shadow-[0_30px_80px_-30px_rgba(168,85,247,0.7)]">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-slate">
            {failed ? (
              <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neon/20 via-violet/20 to-magenta/20 font-display text-6xl font-extrabold text-white/85">
                {profile.initials}
              </span>
            ) : (
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 1024px) 384px, 420px"
                onError={() => setFailed(true)}
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-void/85 via-void/5 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-lg font-bold text-white">{profile.name}</p>
              <p className="mt-0.5 font-mono text-[11px] tracking-[0.2em] text-neon/85 uppercase">
                {profile.role}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.75, duration: 0.7 }}
        className="glass absolute -bottom-6 -left-3 flex items-center gap-2.5 rounded-2xl px-4 py-3 sm:-left-8"
      >
        <span className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-lime/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime" />
        </span>
        <span className="text-xs font-medium text-white/85">{profile.availability}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="glass absolute -top-5 -right-2 flex items-center gap-2.5 rounded-2xl px-4 py-3 sm:-right-6"
      >
        <GraduationCap size={16} className="shrink-0 text-neon" />
        <span className="text-xs font-medium whitespace-nowrap text-white/85">
          MIST CSE Student
        </span>
      </motion.div>
    </motion.div>
  )
}
