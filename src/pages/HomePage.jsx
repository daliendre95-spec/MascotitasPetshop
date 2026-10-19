import { Link } from 'react-router-dom'

import '../styles/hero.css'

function HomePage() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1>MASCOTITAS</h1>
        <p>
          Tu pet shop de confianza. Alimento premium, accesorios, juguetes y productos de
          higiene para perros, gatos y más.
        </p>
        <div className="hero-actions">
          <Link to="/productos" className="btn">
            <i className="fa-solid fa-paw" />
            Ver productos
          </Link>
          <Link to="/contacto" className="btn btn-outline">
            Consultar
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomePage
