'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function BlogPage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/posts.json')
      .then(res => res.json())
      .then(data => {
        setPosts(data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
      })
      .catch(() => {
        setPosts([
          {
            id: 1,
            title: "My Journey into Computer Science",
            date: "January 15, 2025",
            excerpt: "Starting my CSE journey at SUST and discovering my passion for robotics and AI development.",
            readTime: "3 min read",
            category: "Personal"
          }
        ])
      })
  }, [])

  return (
    <div className="blog-page">
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">Meheduz</Link>
          <Link href="/" className="back-home">← Back to Portfolio</Link>
        </div>
      </nav>

      <main className="blog-main">
        <div className="container">
          <header className="blog-header">
            <h1>My Blog</h1>
            <p>Thoughts, experiences, and insights from my journey in tech</p>
            <Link href="/admin" className="btn btn-primary" style={{marginTop: '20px', display: 'inline-block'}}>Admin Panel</Link>
          </header>

          <div className="blog-posts">
            {posts.map((post) => (
              <article key={post.id} className="blog-post fb-style">
                <div className="post-header">
                  <div className="author-info">
                    <img src="/meheduz.png" alt="Meheduz" className="author-avatar" />
                    <div>
                      <h3 className="author-name">Md. Meheduz Zaman</h3>
                      <p className="post-time">{post.date} • <span className="post-category">{post.category}</span></p>
                    </div>
                  </div>
                </div>
                
                <div className="post-content">
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-text">{post.content || post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}