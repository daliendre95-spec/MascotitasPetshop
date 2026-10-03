import { Link } from 'react-router-dom'

import '../styles/hero.css'

function HomePage() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title">MASCOTITAS</h1>
        <p>
          Tu pet shop de confianza. Alimento premium, accesorios, juguetes y productos de
          higiene para perros, gatos y más.
        </p>
        <div className="hero-actions">
          <Link to="/productos" className="btn">
            <i className="fa-solid fa-paw" aria-hidden="true" />
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
