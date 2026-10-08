import '../styles/footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="#" aria-label="Instagram">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fa-brands fa-facebook" />
          </a>
          <a href="#" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp" />
          </a>
        </div>
        <p>&copy; 2026 MASCOTITAS. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
