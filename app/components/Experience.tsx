'use client'

import { useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    company: "Alpha Intern",
    role: "Business Dev. & Operations Lead",
    duration: "July 2023 - May 2025",
    location: "Haryana, India",
    responsibilities: [
      "Co-founded and scaled a tech startup, leading business development and strategies.",
      "Developed growth strategies driving user acquisition and market penetration.",
      "Managed end-to-end product operations from ideation to delivery.",
      "Conducted sales presentations and maintained client relationships."
    ],
    tech: ["Strategy", "Sales", "Operations", "Leadership"]
  },
  {
    company: "The Quality SEO Pvt Ltd",
    role: "Backend Development Intern",
    duration: "May 2025 - July 2025",
    location: "Rupandehi, Nepal",
    responsibilities: [
      "Backend development using Node.js and Express.js.",
      "API development and database management.",
      "Worked with REST APIs and microservices architecture.",
      "Collaborated on scalable backend solutions."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "REST API"]
  },
  {
     company: "Network Freelancer",
     role: "Freelance Developer",
     duration: "Ongoing",
     location: "Remote",
     responsibilities: [
        "Completed projects worth more than INR 1 million with team.",
        "Delivering full-stack solutions for diverse clients.",
        "Managing project lifecycles and client communications."
     ],
     tech: ["Full Stack", "MERN", "Project Management"]
  }
]

export default function Experience() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Ensure visibility before animation
    gsap.set('.experience-card', { opacity: 1, x: 0 })

    const cards = gsap.utils.toArray('.experience-card')
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cards.forEach((card: any, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            x: index % 2 === 0 ? -40 : 40,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out"
        })
    })

    gsap.from('.timeline-line-progress', {
        scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
        },
        height: '100%',
        ease: 'none'
    })

  }, { scope: container })

  return (
    <section id="experience" ref={container} className="py-24 px-6 relative bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white text-center mb-16">
            Work <span className="text-primary">Experience</span>
        </h2>

        <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 transform md:-translate-x-1/2 ml-4 md:ml-0">
                <div className="timeline-line-progress w-full bg-primary origin-top h-0"></div>
            </div>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className={`experience-card relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 ml-2.5 md:ml-0 border-4 border-dark z-10 shadow-[0_0_10px_theme('colors.primary')]"></div>

                        {/* Content Width */}
                        <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                            <div className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group">
                                <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                                    <span className="text-sm text-gray-400 font-code flex items-center gap-1 whitespace-nowrap">
                                        <Calendar size={14} /> {exp.duration}
                                    </span>
                                </div>
                                
                                <div className="flex items-center gap-2 mb-4 text-primary font-medium text-sm">
                                    <Briefcase size={16} />
                                    <span>{exp.company}</span>
                                    <span className="text-gray-500 mx-1">|</span>
                                    <MapPin size={16} />
                                    <span>{exp.location}</span>
                                </div>

                                <ul className="space-y-2 mb-6 text-gray-300 list-disc list-inside text-sm leading-relaxed">
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-code">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Spacer for other side to maintain structure if needed, but flex handles it */}
                        <div className="hidden md:block w-1/2"></div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}
