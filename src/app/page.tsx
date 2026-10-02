'use client'

import { useEffect } from 'react'
import { About } from '@/components/about'
import { Backdrop } from '@/components/backdrop'
import { Contact } from '@/components/contact'
import { Cursor } from '@/components/cursor'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Journey } from '@/components/journey'
import { Marquee } from '@/components/marquee'
import { Nav } from '@/components/nav'
import { Preloader } from '@/components/preloader'
import { Skills } from '@/components/skills'
import { Work } from '@/components/work'

export default function Home() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement
      const typing = t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement
      if (e.key === '/' && !typing) {
        e.preventDefault()
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <Preloader />
      <Cursor />
      <Backdrop />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
