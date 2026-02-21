'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Github } from 'lucide-react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Image from 'next/image'

const projects = [
  {
    title: "Build Nexus",
    description: "A software development company product.",
    tech: ["Next.js", "React", "Node.js"],
    repo: "https://github.com/smartbizhelper/nexus",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    title: "Inventory Management",
    description: "Full-featured inventory management system with CRUD operations.",
    tech: ["Jupyter Notebook", "Python", "Data Analysis"],
    repo: "https://github.com/Bikash61/Inventory-Management-System",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Movie Recommendation",
    description: "AI-powered movie recommendation engine using machine learning algorithms.",
    tech: ["Jupyter Notebook", "ML", "Python"],
    repo: "https://github.com/Bikash61/Final-movie-recommend-system",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop"
  },
  {
    title: "Python Projects",
    description: "Collection of Python projects showcasing various concepts.",
    tech: ["Python", "Jupyter"],
    repo: "https://github.com/Bikash61/Python-Projects",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2664&auto=format&fit=crop"
  }
]

export default function Projects() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Ensure visibility before animation
    gsap.set('.section-title', { opacity: 1, y: 0 })
    
    gsap.from('.section-title', {
        scrollTrigger: {
            trigger: container.current,
            start: "top 90%",
            toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    })
  }, { scope: container })

  return (
    <section id="projects" ref={container} className="py-24 px-4 relative bg-dark overflow-hidden">
        <h2 className="section-title text-4xl md:text-5xl font-bold font-display text-white text-center mb-16">
            Featured <span className="text-secondary">Projects</span>
        </h2>

        <div className="max-w-7xl mx-auto px-4">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                initialSlide={0}
                loop={true}
                speed={800}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: true,
                }}
                pagination={{ clickable: true, dynamicBullets: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper w-full py-12 px-4"
            >
                {projects.map((project, i) => (
                    <SwiperSlide key={i} className="w-[85vw] sm:w-[350px] md:w-[450px] relative">
                        <div className="bg-dark-lighter/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden group shadow-2xl h-full flex flex-col hover:border-primary/50 transition-colors duration-500">
                            {/* Image Container */}
                            <div className="h-48 md:h-64 relative overflow-hidden">
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
                                
                                {/* Floating Tech Tags - Visible on mobile/hover on desktop */}
                                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-10 transform translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                                    {project.tech.slice(0, 3).map((t, index) => (
                                        <span key={index} className="text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 bg-primary text-dark rounded-full shadow-lg">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4 md:mb-6 flex-grow">{project.description}</p>
                                
                                <a 
                                    href={project.repo} 
                                    target="_blank" 
                                    className="w-full flex items-center justify-center gap-2 py-3 md:py-4 bg-white/5 hover:bg-primary hover:text-dark text-white rounded-xl transition-all duration-300 font-bold text-sm border border-white/5 group-hover:border-primary/30"
                                >
                                    <Github size={18} /> View Source Code
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}
