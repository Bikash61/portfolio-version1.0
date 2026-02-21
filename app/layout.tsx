import type { Metadata } from 'next'
import { Playfair_Display, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import '@/styles/animations.css'
import SmoothScroller from './components/SmoothScroller'
import Navigation from './components/Navigation'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'Bikash Bashyal | Full Stack Developer',
  description: 'Portfolio of Bikash Bashyal - Full Stack Developer specializing in MERN Stack, Next.js, and scalable web applications. Based in Nepal.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'Next.js', 'React', 'Node.js', 'Nepal', 'Bikash Bashyal'],
  authors: [{ name: 'Bikash Bashyal' }],
  creator: 'Bikash Bashyal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Bikash Bashyal | Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN Stack, Next.js, and scalable web applications.',
    siteName: 'Bikash Bashyal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bikash Bashyal | Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN Stack, Next.js, and scalable web applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${syne.variable} ${jetbrains.variable}`}>
      <body className="bg-dark text-white font-sans overflow-x-hidden antialiased">
        <SmoothScroller />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
