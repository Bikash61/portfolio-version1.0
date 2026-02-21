'use client'

import { useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Image from 'next/image'

export default function About() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Ensure visibility before animation
    gsap.set('.about-content', { opacity: 1, y: 0 })
    gsap.set('.stat-item', { opacity: 1, y: 0 })
    
    gsap.from('.about-content', {
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
    })

    gsap.from('.stat-item', {
        scrollTrigger: {
            trigger: '.stats-container',
            start: "top 90%",
            toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out"
    })

  }, { scope: container })

  return (
    <section id="about" ref={container} className="py-24 px-6 relative bg-dark-lighter">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            <div className="about-content relative group hidden md:block">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800 border-2 border-primary/20 relative">
                     <Image 
                        src="https://avatars.githubusercontent.com/u/148321577?v=4" 
                        alt="Bikash Bashyal" 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                </div>
                <div className="absolute -inset-4 bg-primary/10 -z-10 rounded-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-0"></div>
            </div>

            <div className="space-y-6">
                <h2 className="about-content text-4xl md:text-5xl font-bold font-display text-white">
                    Who is <span className="text-secondary">Bikash?</span>
                </h2>
                
                <div className="about-content space-y-4 text-cream/80 font-body text-lg leading-relaxed">
                    <p>
                        I&apos;m Bikash Bashyal, a B.Tech Computer Science student who found his passion not just in technology, but in creating, selling, and scaling ideas that make an impact. My journey began with tech competitions like the International Computer Olympiad (Finalist, 2019), but over time, I discovered my real excitement lies in entrepreneurship and business development.
                    </p>
                    <p>
                        During college, I co-founded a startup Alpha Intern, learned the value of execution, and realized how powerful it is to combine tech knowledge with business thinking.
                    </p>
                    <p>
                         Currently, I&apos;m learning sales, marketing, and startup growth to build strong foundations for future ventures.
                    </p>
                </div>

                <div className="stats-container grid grid-cols-2 gap-6 pt-6">
                    {[
                        { label: 'Experience', value: '2+ Years' },
                        { label: 'Students Taught', value: '1000+' },
                        { label: 'Projects', value: '6+' },
                        { label: 'Olympiad', value: 'Finalist' }
                    ].map((stat, i) => (
                        <div key={i} className="stat-item p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
                            <h3 className="text-2xl md:text-3xl font-bold text-primary font-display">{stat.value}</h3>
                            <p className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  )
}
