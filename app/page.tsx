import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Blog from './components/Blog'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Blog />
      <Contact />
      
      <footer className="py-8 text-center text-gray-500 text-sm bg-dark font-code border-t border-white/5">
        <p>© {new Date().getFullYear()} Bikash Bashyal. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Tailwind, GSAP & Three.js</p>
      </footer>
    </div>
  )
}
