'use client'

import { useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Trophy, Users, Star, Award } from 'lucide-react'

const achievements = [
  {
    icon: <Trophy size={32} />,
    title: "Olympiad Finalist",
    desc: "International Computer Olympiad 2019",
    color: "text-amber-400"
  },
  {
    icon: <Users size={32} />,
    title: "1000+ Students",
    desc: "Mentored in Web Development",
    color: "text-blue-400"
  },
  {
    icon: <Star size={32} />,
    title: "6+ Projects",
    desc: "Built Production Grade Apps",
    color: "text-primary"
  },
  {
    icon: <Award size={32} />,
    title: "Startup Founder",
    desc: "Co-founded Alpha Intern",
    color: "text-purple-400"
  }
]

export default function Achievements() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Set initial state to visible to prevent flash of invisible content
    gsap.set('.achievement-card', { opacity: 1, y: 0 })

    gsap.from('.achievement-card', {
        scrollTrigger: {
            trigger: container.current,
            start: "top 90%",
            toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
    })
  }, { scope: container })

  return (
    <section id="achievements" ref={container} className="py-24 px-6 relative bg-dark-lighter">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white text-center mb-16">
            Key <span className="text-primary">Achievements</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, i) => (
                <div key={i} className="achievement-card p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-2 text-center group">
                    <div className={`mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}
