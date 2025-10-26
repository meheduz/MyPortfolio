'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function BlogPage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Load posts from posts.json for public viewing
    fetch('/posts.json')
      .then(res => res.json())
      .then(data => {
        setPosts(data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
      })
      .catch(() => {
        // Fallback to default posts
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
              <article key={post.id} className="blog-post">
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <span className="read-time">{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}