'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [posts, setPosts] = useState([])
  const [editingPost, setEditingPost] = useState(null)
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'Personal',
    excerpt: ''
  })

  const ADMIN_PASSWORD = 'meheduz2025' // Change this to your secret password

  useEffect(() => {
    const auth = sessionStorage.getItem('adminAuth')
    if (auth === 'true') {
      setIsAuthenticated(true)
      const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]')
      setPosts(savedPosts)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('adminAuth', 'true')
      setPassword('')
    } else {
      alert('Wrong password!')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('adminAuth')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const post = {
      id: Date.now(),
      ...newPost,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      readTime: Math.ceil(newPost.content.split(' ').length / 200) + ' min read'
    }
    
    try {
      // Save to localStorage for immediate display
      const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]')
      const updatedPosts = [post, ...savedPosts]
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
      
      // Submit to Netlify form for processing
      const formData = new FormData()
      formData.append('post-data', JSON.stringify(post))
      
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      
      if (editingPost) {
        const updatedPosts = posts.map(p => p.id === editingPost.id ? {...post, id: editingPost.id} : p)
        setPosts(updatedPosts)
        localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
        setEditingPost(null)
        alert('Post updated successfully!')
      } else {
        setPosts([post, ...posts])
        alert('Post published successfully!')
      }
      setNewPost({ title: '', content: '', category: 'Personal', excerpt: '' })
      
      // Redirect to blog page after 1 second
      setTimeout(() => {
        window.location.href = '/blog'
      }, 1000)
    } catch (error) {
      alert('Error publishing post. Please try again.')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-page">
        <div className="login-container">
          <h1>Admin Login</h1>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">Meheduz</Link>
          <div>
            <Link href="/blog" className="back-home">← Back to Blog</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </nav>

      <main className="admin-main">
        <div className="container">
          <h1>{editingPost ? 'Edit Post' : 'Write New Post'}</h1>
          
          <form onSubmit={handleSubmit} className="post-form" name="blog-posts" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="blog-posts" />
            <input
              type="text"
              placeholder="Post title..."
              value={newPost.title}
              onChange={(e) => setNewPost({...newPost, title: e.target.value})}
              required
            />
            
            <select
              value={newPost.category}
              onChange={(e) => setNewPost({...newPost, category: e.target.value})}
            >
              <option value="Personal">Personal</option>
              <option value="Programming">Programming</option>
              <option value="Robotics">Robotics</option>
              <option value="Tech">Tech</option>
            </select>
            
            <textarea
              placeholder="Write a brief excerpt..."
              value={newPost.excerpt}
              onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
              rows={2}
              required
            />
            
            <textarea
              placeholder="What's on your mind?"
              value={newPost.content}
              onChange={(e) => setNewPost({...newPost, content: e.target.value})}
              rows={8}
              required
            />
            
            <div className="form-buttons">
              <button type="submit" className="publish-btn">
                {editingPost ? 'Update Post' : 'Publish Post'}
              </button>
              {editingPost && (
                <button type="button" onClick={() => {
                  setEditingPost(null)
                  setNewPost({ title: '', content: '', category: 'Personal', excerpt: '' })
                }} className="cancel-btn">
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="recent-posts">
            <h2>Recent Posts</h2>
            {posts.map(post => (
              <div key={post.id} className="admin-post">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <small>{post.date} • {post.category}</small>
                <div className="post-actions">
                  <button onClick={() => {
                    setEditingPost(post)
                    setNewPost({
                      title: post.title,
                      content: post.content || post.excerpt,
                      category: post.category,
                      excerpt: post.excerpt
                    })
                  }} className="edit-btn">Edit</button>
                  <button onClick={() => {
                    if (confirm('Delete this post?')) {
                      const updatedPosts = posts.filter(p => p.id !== post.id)
                      setPosts(updatedPosts)
                      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
                    }
                  }} className="delete-btn">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}