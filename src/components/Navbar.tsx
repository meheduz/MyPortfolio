'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Meheduz</div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-actions">
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}