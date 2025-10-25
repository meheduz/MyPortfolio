export default function Education() {
  const education = [
    {
      degree: "BEng in Computer Science and Engineering",
      institution: "Shahjalal University of Science and Technology (SUST)",
      duration: "2024 – 2028"
    },
    {
      degree: "BSc in Mathematics",
      institution: "University of Rajshahi",
      duration: "2023 – 2024"
    },
    {
      degree: "Higher Secondary, Science",
      institution: "Daud Public School and College",
      duration: "2020 – 2022"
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.degree}</h3>
                <p className="institution">{item.institution}</p>
                <p className="duration">{item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}