'use client'

import { useEffect, useRef } from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Pong Game",
      tags: ["JavaScript", "Game Development", "Web"],
      description: "Classic Pong game recreated using JavaScript and HTML5 Canvas. Features smooth paddle movement, ball physics, score tracking, and responsive gameplay mechanics.",
      features: [
        "Real-time ball physics simulation",
        "Responsive paddle controls",
        "Score tracking system",
        "Collision detection algorithms"
      ],
      links: [
        { url: "https://meheduz.github.io/Pong-Game/", text: "Play Game", icon: "fas fa-play" }
      ]
    },
    {
      title: "Snake Game in C",
      tags: ["C Programming", "Game Development", "Raylib"],
      description: "A modern twist on the classic Snake game, built using C and the raylib game library. Features smooth grid-based movement, sound effects, level progression, and persistent high score storage using JSON.",
      features: [
        "Keyboard controls (WASD or Arrow Keys)",
        "Level progression and speed scaling",
        "Persistent high score storage",
        "Pause/resume and reset controls"
      ],
      links: [
        { url: "https://github.com/meheduz/Game-Project", text: "View Code", icon: "fab fa-github" }
      ]
    },
    {
      title: "CodeCar: Wireless Control with C/C++",
      tags: ["Embedded Systems", "C Programming", "Robotics"],
      description: "Developed a Bluetooth-controlled smart car using Arduino UNO programmed in C/C++. Implemented UART communication, PWM motor control, and HC-05 Bluetooth module for real-time motion control, lighting systems, and sound feedback.",
      features: [
        "Real-time wireless control via Bluetooth",
        "PWM-based motor speed control",
        "Integrated lighting and sound systems",
        "UART communication protocol implementation"
      ],
      links: []
    }
  ]

  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-up')
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Projects</h2>
        <div className="projects-grid" ref={projectsRef}>
          {projects.map((project, index) => (
            <div key={index} className="project-card animate-on-scroll">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-features">
                <ul>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              {project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link, linkIndex) => (
                    <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className={link.icon}></i> {link.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}