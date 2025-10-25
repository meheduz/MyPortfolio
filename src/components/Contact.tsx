export default function Contact() {
  const contactLinks = [
    { url: "https://www.linkedin.com/in/meheduz/", text: "LinkedIn", icon: "fab fa-linkedin" },
    { url: "https://meheduz.me", text: "Website", icon: "fas fa-globe" },
    { url: "mailto:meheduz900@gmail.com", text: "Email", icon: "fas fa-envelope" },
    { url: "https://github.com/meheduz", text: "GitHub", icon: "fab fa-github" },
    { url: "https://kaggle.com/meheduz", text: "Kaggle", icon: "fab fa-kaggle" }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p>I am open to discussing opportunities, collaborations, and innovative projects.</p>
          <div className="contact-links">
            {contactLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className={link.icon}></i>
                <span>{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}