'use client'

import { useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import FloatingSkills from './3d/FloatingSkills'

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "GSAP", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "WebSockets", "Socket.io", "Microservices", "REST APIs"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "Redis", "Mongoose"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "AWS (EC2)", "Git", "Nginx", "CI/CD", "Postman"]
  },
  {
    title: "Other",
    skills: ["Python", "Generative AI", "LangChain", "DSA", "OOP"]
  }
]

export default function Skills() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Ensure visibility before animation
    gsap.set('.skill-category', { opacity: 1, y: 0 })

    gsap.from('.skill-category', {
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
    <section id="skills" ref={container} className="min-h-screen py-24 px-6 relative bg-dark-lighter overflow-hidden">
        {/* Background 3D Elements */}
        <FloatingSkills />
        
        <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white text-center mb-16">
                Technical <span className="text-primary">Skills</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((cat, i) => (
                    <div key={i} className="skill-category bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-all hover:-translate-y-1">
                        <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">{cat.title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {cat.skills.map((skill, j) => (
                                <span key={j} className="px-3 py-1 bg-dark text-gray-300 rounded-full text-sm font-code border border-white/10 hover:text-primary hover:border-primary transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
