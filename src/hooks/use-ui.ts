'use client'

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'

export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    [query],
  )

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query])
  const getServerSnapshot = useCallback(() => false, [])

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const probe = () => {
      const line = window.innerHeight * 0.34
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= line) current = id
      }
      setActive((prev) => {
        const next = current || (ids[0] ?? '')
        return prev === next ? prev : next
      })
    }

    const raf = window.requestAnimationFrame(probe)
    window.addEventListener('scroll', probe, { passive: true })
    window.addEventListener('resize', probe)
    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('scroll', probe)
      window.removeEventListener('resize', probe)
    }
  }, [ids])

  return active
}
