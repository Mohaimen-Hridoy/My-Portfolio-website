'use client'

import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@/hooks/use-ui'

export function Cursor() {
  const isDesktop = useMediaQuery('(pointer: fine)')
  const [visible, setVisible] = useState(false)
  const [label, setLabel] = useState('')

  const x = useSpring(useMotionValue(-100), { stiffness: 700, damping: 45 })
  const y = useSpring(useMotionValue(-100), { stiffness: 700, damping: 45 })

  useEffect(() => {
    if (!isDesktop) return

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const target = (e.target as HTMLElement)?.closest?.('[data-cursor]') as HTMLElement | null
      setLabel(target?.dataset.cursor ?? '')
    }
    const leave = () => setVisible(false)

    window.addEventListener('pointermove', move)
    document.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [isDesktop, x, y])

  if (!isDesktop) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[190] flex items-center justify-center mix-blend-difference"
          style={{ x, y }}
        >
          <motion.div
            className="flex items-center justify-center rounded-full bg-white"
            animate={{ width: label ? 62 : 9, height: label ? 62 : 9 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          >
            <AnimatePresence>
              {label && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-[10px] font-bold tracking-wide whitespace-nowrap text-black"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
