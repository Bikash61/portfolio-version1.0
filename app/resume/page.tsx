'use client'

import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-10 px-4 md:px-8 print:p-0 print:bg-white text-gray-900">
      
      {/* Resume Content */}
      <div 
        className="w-full md:max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none p-6 md:p-12 print:p-0 print:max-w-none"
        style={{ minHeight: '297mm' }} // A4 height
      >
        {/* Header */}
        <header className="border-b-2 border-green-700 pb-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight uppercase">Bikash Bashyal</h1>
              <p className="text-lg md:text-xl text-green-700 font-medium mt-1">Full Stack Developer</p>
            </div>
            <div className="w-full md:w-auto text-left md:text-right space-y-2 text-sm">
              <div className="flex items-center justify-start md:justify-end gap-2 text-gray-600">
                <span className="md:order-1">Butwal, Lumbini, Nepal</span>
                <MapPin size={16} className="md:order-2" />
              </div>
              <div className="flex items-center justify-start md:justify-end gap-2 text-gray-600">
                <a href="mailto:bashyalb96@gmail.com" className="hover:text-green-700 md:order-1">bashyalb96@gmail.com</a>
                <Mail size={16} className="md:order-2" />
              </div>
              <div className="flex items-center justify-start md:justify-end gap-2 text-gray-600">
                <a href="tel:+9779867434929" className="hover:text-green-700 md:order-1">+977 9867434929</a>
                <Phone size={16} className="md:order-2" />
              </div>
              <div className="flex items-center justify-start md:justify-end gap-4 mt-2">
                 <a href="https://linkedin.com/in/bikash-bashyal-74089125a/" className="text-gray-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                 </a>
                 <a href="https://github.com/Bikash61" className="text-gray-600 hover:text-black" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                 </a>
              </div>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:grid-cols-3">
          
          {/* Main Column */}
          <div className="md:col-span-2 space-y-8 print:col-span-2">
            
            {/* Experience */}
            <section>
              <h2 className="text-lg font-bold text-green-800 uppercase border-b border-gray-200 pb-1 mb-4 flex items-center gap-2">
                Experience
              </h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-gray-900">Alpha Intern</h3>
                    <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-gray-600">July 2023 - May 2025</span>
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <p className="text-sm font-semibold text-green-700">Business Dev. & Operations Lead</p>
                    <span className="text-xs text-gray-500">Haryana, India</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-outside ml-4">
                    <li>Co-founded and scaled a tech startup, leading business development strategies and operations.</li>
                    <li>Developed comprehensive growth strategies driving user acquisition and market penetration.</li>
                    <li>Managed end-to-end product operations from ideation to delivery.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-gray-900">The Quality SEO Pvt Ltd</h3>
                    <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-gray-600">May 2025 - July 2025</span>
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <p className="text-sm font-semibold text-green-700">Backend Development Intern</p>
                    <span className="text-xs text-gray-500">Rupandehi, Nepal</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-outside ml-4">
                    <li>Spearheaded backend development using Node.js and Express.js for scalable web applications.</li>
                    <li>Designed and implemented RESTful APIs and managed MongoDB databases.</li>
                    <li>Collaborated with the frontend team to integrate microservices architecture.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-gray-900">Network Freelancer</h3>
                    <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-gray-600">Ongoing</span>
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <p className="text-sm font-semibold text-green-700">Full Stack Developer</p>
                    <span className="text-xs text-gray-500">Remote</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-outside ml-4">
                    <li>Completed high-value projects worth &gt; INR 1 million with a dedicated team.</li>
                    <li>Delivered robust full-stack solutions using MERN stack for diverse international clients.</li>
                    <li>Managed entire project lifecycles ensuring timely delivery and quality code.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-lg font-bold text-green-800 uppercase border-b border-gray-200 pb-1 mb-4">
                Key Projects
              </h2>
              <div className="space-y-4">
                <div>
                   <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-gray-900">Build Nexus</h3>
                      <a href="https://github.com/smartbizhelper/nexus.git" className="text-xs text-blue-600 hover:underline">View Code</a>
                   </div>
                   <p className="text-xs text-gray-500 mb-1">Next.js, React, Node.js</p>
                   <p className="text-sm text-gray-600">A comprehensive software development company product showcasing services and portfolio.</p>
                </div>
                <div>
                   <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-gray-900">Inventory Management System</h3>
                      <a href="https://github.com/Bikash61/Inventory-Management-System" className="text-xs text-blue-600 hover:underline">View Code</a>
                   </div>
                   <p className="text-xs text-gray-500 mb-1">Python, Data Analysis</p>
                   <p className="text-sm text-gray-600">Full-featured inventory system performing CRUD operations and data analytics.</p>
                </div>
                <div>
                   <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-gray-900">Movie Recommendation Engine</h3>
                      <a href="https://github.com/Bikash61/Final-movie-recommend-system-" className="text-xs text-blue-600 hover:underline">View Code</a>
                   </div>
                   <p className="text-xs text-gray-500 mb-1">Machine Learning, Python</p>
                   <p className="text-sm text-gray-600">AI-powered recommendation engine utilizing collaborative filtering algorithms.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="space-y-8 print:col-span-1">
            
            {/* Skills */}
            <section>
              <h2 className="text-lg font-bold text-green-800 uppercase border-b border-gray-200 pb-1 mb-4">
                Technical Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-1">
                    {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'GSAP'].map(s => (
                      <span key={s} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-1">
                    {['Node.js', 'Express.js', 'WebSockets', 'REST APIs', 'Microservices'].map(s => (
                      <span key={s} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                   <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Database</h4>
                   <div className="flex flex-wrap gap-1">
                      {['MongoDB', 'MySQL', 'Redis', 'Mongoose'].map(s => (
                        <span key={s} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{s}</span>
                      ))}
                   </div>
                </div>
                 <div>
                   <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tools & Others</h4>
                   <div className="flex flex-wrap gap-1">
                      {['Docker', 'AWS', 'Git', 'Generative AI', 'Python'].map(s => (
                        <span key={s} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{s}</span>
                      ))}
                   </div>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
               <h2 className="text-lg font-bold text-green-800 uppercase border-b border-gray-200 pb-1 mb-4">
                  Achievements
               </h2>
               <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Olympiad Finalist</h3>
                    <p className="text-xs text-gray-600">International Computer Olympiad 2019</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Mentorship</h3>
                    <p className="text-xs text-gray-600">Mentored 1000+ Students in Web Development</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Startup Founder</h3>
                    <p className="text-xs text-gray-600">Co-founded Alpha Intern</p>
                  </div>
               </div>
            </section>

             {/* Education (Inferred/Added based on context if available, else generic) */}
             {/* Not explicitly in data files provided, skipping to avoid hallucinations */}
             
             {/* Languages */}
             <section>
               <h2 className="text-lg font-bold text-green-800 uppercase border-b border-gray-200 pb-1 mb-4">
                  Languages
               </h2>
               <ul className="text-sm text-gray-600 space-y-1">
                 <li className="flex justify-between"><span>English</span> <span className="text-gray-400">Professional</span></li>
                 <li className="flex justify-between"><span>Hindi</span> <span className="text-gray-400">Native/Fluent</span></li>
                  <li className="flex justify-between"><span>Nepali</span> <span className="text-gray-400">Native</span></li>
               </ul>
             </section>

          </div>
        </div>
      </div>
    </div>
  )
}
