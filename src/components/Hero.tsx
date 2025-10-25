export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <img src="/meheduz.png" alt="Md. Meheduz Zaman" className="avatar-image" />
        </div>
        <h1 className="hero-title">Md. Meheduz Zaman</h1>
        <h2 className="hero-subtitle">Computer Science & Engineering Student</h2>
        <p className="hero-description">
          Passionate about robotics, AI, and building intelligent systems that solve real-world problems.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}