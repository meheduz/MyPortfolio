'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Progress bar
    const progressBar = document.getElementById('progressBar')
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      if (progressBar) {
        progressBar.style.width = scrollPercent + '%'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="progress-bar" id="progressBar"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}