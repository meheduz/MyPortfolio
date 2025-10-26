'use client'

import { useEffect, useRef } from 'react'

export default function Blog() {
  const posts = [
    {
      title: "My Journey into Computer Science",
      date: "January 15, 2025",
      excerpt: "Starting my CSE journey at SUST and discovering my passion for robotics and AI development.",
      readTime: "3 min read",
      category: "Personal"
    },
    {
      title: "Building My First Game in C",
      date: "January 10, 2025", 
      excerpt: "Lessons learned while developing a Snake game using C and the raylib library.",
      readTime: "5 min read",
      category: "Programming"
    },
    {
      title: "Robotics and Embedded Systems",
      date: "January 5, 2025",
      excerpt: "Exploring the world of embedded programming through my CodeCar project using Arduino.",
      readTime: "4 min read",
      category: "Robotics"
    }
  ]

  const blogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.blog-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-up')
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (blogRef.current) {
      observer.observe(blogRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Latest Posts</h2>
        <div className="blog-grid" ref={blogRef}>
          {posts.map((post, index) => (
            <article key={index} className="blog-card animate-on-scroll">
              <div className="blog-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-footer">
                <span className="read-time">{post.readTime}</span>
                <button className="read-more">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}