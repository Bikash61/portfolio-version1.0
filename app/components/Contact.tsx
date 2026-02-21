'use client'

import { useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Send, MapPin, Phone, Mail, Linkedin, Github, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import ContactMesh from './3d/ContactMesh'

export default function Contact() {
  const container = useRef(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        'service_ntyfnjg',
        'template_su5zqe6',
        {
          from_name: formState.name,
          to_name: 'Bikash Bashyal',
          from_email: formState.email,
          to_email: 'bashyalb96@gmail.com',
          message: formState.message,
          reply_to: formState.email,
        },
        'T_8QB8ZRG6-5RgnyO'
      )
      
      alert('Message sent successfully!')
      setFormState({ name: '', email: '', message: '' })
    } catch (error: unknown) {
      console.error('Error sending email:', error)
      let errorMessage = 'Unknown error'
      if (typeof error === 'object' && error !== null) {
        if ('text' in error) errorMessage = (error as { text: string }).text;
        else if ('message' in error) errorMessage = (error as { message: string }).message;
      }
      
      alert(`Failed to send message: ${errorMessage}. Check console for details.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Ensure visibility before animation
    gsap.set('.contact-reveal', { opacity: 1, y: 0 })

    gsap.from('.contact-reveal', {
        scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
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
    <section id="contact" ref={container} className="py-24 px-6 relative bg-dark-lighter overflow-hidden">
        <ContactMesh />
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
            
            <div className="w-full md:w-1/2 space-y-8">
                <h2 className="contact-reveal text-4xl md:text-5xl font-bold font-display text-white mb-8">
                    Let&apos;s <span className="text-secondary">Collaborate</span>
                </h2>
                <p className="contact-reveal text-gray-300 text-lg">
                    Always open to collaborate, brainstorm, or build with like-minded people. Whether you have a project in mind or just want to say hi, feel free to reach out.
                </p>

                <div className="contact-reveal space-y-6 pt-4">
                    <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Email</p>
                            <a href="mailto:bashyalb96@gmail.com" className="font-code">bashyalb96@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Phone</p>
                            <a href="tel:+9779867434929" className="font-code">+977 9867434929</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Location</p>
                            <span className="font-code">Butwal, Lumbini, Nepal</span>
                        </div>
                    </div>
                </div>

                <div className="contact-reveal flex gap-4 pt-4">
                    <a href="https://github.com/Bikash61" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/bikash-bashyal-74089125a/" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>

            <div className="w-full md:w-1/2">
                <form onSubmit={handleSubmit} className="contact-reveal bg-white/5 p-8 rounded-2xl border border-white/5 space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2">Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="Your Name"
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2">Email</label>
                        <input 
                            type="email" 
                            className="w-full bg-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="your@email.com"
                            value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2">Message</label>
                        <textarea 
                            className="w-full bg-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors h-32 resize-none"
                            placeholder="Tell me about your project..."
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                            required
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                Sending...
                                <Loader2 size={18} className="animate-spin" />
                            </>
                        ) : (
                            <>
                                Send Message 
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>
            </div>

        </div>
    </section>
  )
}
