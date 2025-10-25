'use client'

import { useEffect, useRef } from 'react'

export default function Skills() {
  const skills = [
    { name: 'C', icon: 'fab fa-cuttlefish' },
    { name: 'C++', icon: 'fab fa-cuttlefish' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js-square' }
  ]

  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillTags = entry.target.querySelectorAll('.skill-tag')
            skillTags.forEach((skill, index) => {
              setTimeout(() => {
                skill.classList.add('animate-scale')
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Skills</h2>
        <div className="skills-list" ref={skillsRef}>
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag" style={{opacity: 0}}>
              <i className={skill.icon}></i>
              <span>{skill.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}