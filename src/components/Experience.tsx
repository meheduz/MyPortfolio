export default function Experience() {
  const experiences = [
    {
      title: "Executive Member",
      organization: "CSE Society, SUST",
      duration: "2025 – Present",
      description: "Leading initiatives to foster technical learning and collaboration among CSE students, organizing workshops and coding competitions.",
      icon: "fas fa-users"
    },
    {
      title: "Member",
      organization: "RoboSUST",
      duration: "2024 – Present",
      description: "Actively participating in robotics projects, contributing to embedded systems development and autonomous vehicle research.",
      icon: "fas fa-robot"
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience & Leadership</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="card-icon">
                <i className={exp.icon}></i>
              </div>
              <h3>{exp.title}</h3>
              <p className="organization">{exp.organization}</p>
              <p className="duration">{exp.duration}</p>
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}