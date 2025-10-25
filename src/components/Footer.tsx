export default function Footer() {
  const footerLinks = [
    { url: "https://linkedin.com/in/meheduz", text: "LinkedIn" },
    { url: "https://github.com/meheduz", text: "GitHub" },
    { url: "https://kaggle.com/meheduz", text: "Kaggle" }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 meheduz</p>
        <div className="footer-links">
          {footerLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}