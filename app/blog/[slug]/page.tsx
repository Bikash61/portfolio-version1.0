import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/data/blog'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import Image from 'next/image'

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.id,
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.id === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen pt-24 pb-16 px-6 bg-dark">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/#blog" 
          className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </Link>
        
        <header className="mb-12">
           <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6 font-code">
              <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-primary">
                 <Tag size={14} /> {post.category}
              </span>
              <span className="flex items-center gap-2">
                 <Calendar size={14} /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                 <Clock size={14} /> {post.readTime}
              </span>
           </div>

           <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-8 leading-tight">
             {post.title}
           </h1>

           <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
             <Image 
               src={post.image} 
               alt={post.title}
               fill
               className="object-cover"
               priority
             />
             <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
           </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none font-body prose-headings:font-display prose-headings:text-primary prose-a:text-primary prose-blockquote:border-primary">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  )
}
