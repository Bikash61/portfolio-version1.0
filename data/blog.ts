export const BLOG_POSTS = [
  {
    id: 'building-scalable-mern-applications',
    title: "Building Scalable MERN Applications",
    excerpt: "Lessons learned from deploying production-ready applications with the MERN stack.",
    date: "May 15, 2025",
    category: "Development",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    content: `
# Building Scalable MERN Applications

When I first started building with the MERN stack (MongoDB, Express, React, Node.js), everything seemed straightforward. But as soon as user traffic increased, I realized that "it works on my machine" is not a strategy.

## 1. Database Indexing is Non-Negotiable

MongoDB is powerful, but without proper indexing, your queries will crawl. I learned this the hard way when an aggregation pipeline took 5 seconds to execute. By simply adding compound indexes on frequently queried fields, I reduced execution time to 50ms.

\`\`\`javascript
// Example of creating an index in Mongoose
schema.index({ status: 1, createdAt: -1 });
\`\`\`

## 2. Stateless Authentication

Switching from session-based auth to JWT (JSON Web Tokens) allowed my applications to scale horizontally. Statefulness is the enemy of scalability.

## 3. Caching with Redis

Not every request needs to hit the database. Implementing Redis for caching frequently accessed data (like user profiles or product lists) reduced database load by 40%.

## Conclusion

Scalability isn't just about adding more servers; it's about writing efficient code and using the right tools for the job.
    `
  },
  {
    id: 'from-tech-to-business',
    title: "From Tech to Business: My Journey",
    excerpt: "My journey transitioning from pure coding to understanding business operations.",
    date: "April 22, 2025",
    category: "Business",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    content: `
# From Code to Customers

I started as a pure "techie". I loved algorithms, clean code, and optimizing build times. But when I co-founded Alpha Intern, I realized that the best code in the world doesn't matter if no one uses it.

## The Mental Shift

Business isn't just "selling". It's about solving problems. As engineers, we solve technical problems. As entrepreneurs, we solve human problems.

### Key Lessons:
1. **Empathy is better than logic.** (Sometimes)
2. **Speed of execution > Perfection.**
3. **Sales is just debugging human needs.**

## Bridging the Gap

My background in CS helped me understand the "how", but business taught me the "why". Now, when I write code, I'm not just thinking about complexity; I'm thinking about ROI.
    `
  },
  {
    id: 'teaching-1000-students',
    title: "Teaching 1000+ Students",
    excerpt: "What I learned about mentorship and the most common pitfalls for beginners.",
    date: "March 10, 2025",
    category: "Education",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    content: `
# The Joy of Teaching

Over the last two years, I've had the privilege of teaching web development to over 1000 students. It's been one of the most rewarding experiences of my life.

## The "Tutorial Hell" Trap

The #1 problem beginners face is getting stuck watching tutorials without building anything. My advice? **Build something ugly.** It doesn't matter if it breaks. Just build.

## Simplifying Complex Concepts

Explaining Redux or the Event Loop to a beginner forces you to truly understand it yourself. Einstein said, "If you can't explain it simply, you don't understand it well enough."

## Conclusion

Teaching has made me a better engineer. It forces me to question my own assumptions and constantly relearn the basics.
    `
  }
];
