export default function Certifications() {
  const certifications = [
    {
      title: "AI+ Prompt Engineer Level 1™",
      issuer: "AI Certs™",
      icon: "fas fa-brain"
    },
    {
      title: "SPARK CHALLENGE 2024",
      issuer: "SUST Business Club",
      icon: "fas fa-trophy"
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon">
                <i className={cert.icon}></i>
              </div>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}