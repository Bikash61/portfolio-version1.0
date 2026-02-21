'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import ParticleBackground from './3d/ParticleBackground'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title characters (simulated SplitText)
      gsap.from('.char', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.05,
        delay: 0.2
      })

      gsap.from('.hero-sub', {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 1
      })

      gsap.from('.hero-btn', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 1.2
      })
      
      gsap.from('.social-icon', {
        x: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 1.5
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const title = "BIKASH BASHYAL"
  
  return (
    <section id="home" ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark to-dark-lighter">
      <ParticleBackground />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold font-display tracking-tight mb-6 overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-cream via-white to-cream">
          {title.split('').map((char, i) => (
            <span key={i} className="char inline-block">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        <p className="hero-sub text-xl md:text-2xl text-cream/80 font-body mb-8 max-w-2xl mx-auto">
          Software Engineer | Business Development & Growth Enthusiast
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <a href="#projects" className="hero-btn px-8 py-4 bg-secondary text-cream rounded-full font-bold hover:bg-primary hover:text-dark transition-all duration-300 text-lg shadow-lg shadow-secondary/20">
            View Projects
          </a>
          <a href="#contact" className="hero-btn px-8 py-4 border border-cream/20 hover:border-primary text-cream rounded-full font-bold hover:bg-white/5 transition-all text-lg backdrop-blur-sm">
            Contact Me
          </a>
        </div>

        <div className="fixed left-8 bottom-8 hidden md:flex flex-col gap-6 mix-blend-difference z-50">
           <a href="https://github.com/Bikash61" target="_blank" className="social-icon hover:text-primary transition-colors hover:scale-110 transform"><Github /></a>
           <a href="https://www.linkedin.com/in/bikash-bashyal-74089125a/" target="_blank" className="social-icon hover:text-primary transition-colors hover:scale-110 transform"><Linkedin /></a>
           <a href="mailto:bashyalb96@gmail.com" className="social-icon hover:text-primary transition-colors hover:scale-110 transform"><Mail /></a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowDown size={32} />
      </div>
    </section>
  )
}
