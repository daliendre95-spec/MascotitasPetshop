import '../styles/footer.css'

const socialLinks = [
  { href: '#', label: 'Instagram', icon: 'fa-brands fa-instagram' },
  { href: '#', label: 'Facebook', icon: 'fa-brands fa-facebook' },
  { href: '#', label: 'WhatsApp', icon: 'fa-brands fa-whatsapp' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-social">
          {socialLinks.map(({ href, label, icon }) => (
            <a key={label} href={href} aria-label={label}>
              <i className={icon} aria-hidden="true" />
            </a>
          ))}
        </div>
        <p>&copy; 2026 MASCOTITAS. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
