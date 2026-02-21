'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import { Menu, X, Download } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const navRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isMobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          y: '0%',
          duration: 0.6,
          ease: 'expo.out'
        })
        gsap.fromTo('.mobile-link-item', 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
        )
      } else {
        gsap.to(mobileMenuRef.current, {
          y: '-100%',
          duration: 0.6,
          ease: 'expo.inOut'
        })
      }
    }, containerRef) // Scope to component
    return () => ctx.revert()
  }, [isMobileMenuOpen])

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    })
  }, [])
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <div ref={containerRef}>
      <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-dark/50 border-b border-white/5 print:hidden">
        <Link href="/" className="text-2xl font-bold font-display text-primary z-[60] relative">
          BB
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={pathname === '/' ? link.href : `/${link.href}`}
              className="font-body text-sm uppercase tracking-wider hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {pathname === '/resume' ? (
          <button 
            onClick={() => window.print()}
            className="hidden md:flex items-center gap-2 px-6 py-2 border border-primary bg-primary text-white hover:bg-secondary transition-all duration-300 rounded-full font-code text-sm"
          >
            <Download size={16} /> Download PDF
          </button>
        ) : (
          <Link 
            href="/resume" 
            className="hidden md:block px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full font-code text-sm"
          >
            Resume
          </Link>
        )}

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2 z-[60] relative hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          ref={mobileMenuRef}
          className="fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center md:hidden h-screen w-screen translate-y-[-100%]"
        >
          {/* Background Patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-dark to-dark opacity-50 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex flex-col gap-8 items-center relative z-10 w-full px-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={pathname === '/' ? link.href : `/${link.href}`}
                className="mobile-link-item font-display text-4xl font-bold text-gray-300 hover:text-primary transition-colors hover:scale-105 transform duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="mobile-link-item w-12 h-px bg-white/10 my-2"></div>
            
            <div className="mobile-link-item">
              {pathname === '/resume' ? (
                <button 
                  onClick={() => {
                    window.print()
                    setIsMobileMenuOpen(false)
                  }}
                  className="px-8 py-3 border border-primary bg-primary text-white hover:bg-secondary transition-all duration-300 rounded-full font-code text-lg tracking-widest uppercase flex items-center gap-2"
                >
                  <Download size={20} /> Download PDF
                </button>
              ) : (
                <Link 
                  href="/resume" 
                  className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full font-code text-lg tracking-widest uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resume
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
