'use client'

import { useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'
import { BLOG_POSTS } from '@/data/blog'

export default function Blog() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Set initial state to visible to prevent flash of invisible content
    gsap.set('.blog-card', { opacity: 1, y: 0 })

    gsap.from('.blog-card', {
        scrollTrigger: {
            trigger: container.current,
            start: "top 90%",
            toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
    })
  }, { scope: container })

  return (
    <section id="blog" ref={container} className="py-24 px-6 relative bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white text-center mb-16">
            Latest <span className="text-secondary">Articles</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((blog, i) => (
                <Link href={`/blog/${blog.id}`} key={i} className="blog-card block bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 group transition-all hover:transform hover:-translate-y-2 shadow-lg">
                    <div className="h-48 bg-gray-800 relative overflow-hidden">
                        <Image 
                            src={blog.image} 
                            alt={blog.title} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-primary/10 transition-colors"></div>
                    </div>
                    
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4 text-xs font-code text-gray-400">
                            <span className="text-primary">{blog.category}</span>
                            <span>{blog.date}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                            {blog.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                            {blog.excerpt}
                        </p>
                        
                        <span className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
                            Read Article <ArrowRight size={16} />
                        </span>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </section>
  )
}
