'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Preloader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const id = window.setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + Math.max(1.2, (100 - p) * 0.06))
        if (next >= 100) {
          window.clearInterval(id)
          window.setTimeout(() => setDone(true), 300)
        }
        return next
      })
    }, 40)

    return () => window.clearInterval(id)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-void"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10 sm:w-80">
            <div
              className="h-full rounded-full bg-gradient-to-r from-neon via-violet to-magenta"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex w-56 items-baseline justify-between sm:w-80">
            <span className="font-mono text-[11px] tracking-[0.35em] text-white/40">
              LOADING
            </span>
            <span className="font-mono text-sm tabular-nums text-white/80">
              {Math.round(progress).toString().padStart(3, '0')}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
