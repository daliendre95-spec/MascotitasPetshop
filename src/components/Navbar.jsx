import { NavLink } from 'react-router-dom'

import '../styles/navbar.css'

const navLinks = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/productos', label: 'Productos' },
  { to: '/galeria', label: 'Galería' },
  { to: '/contacto', label: 'Contacto' },
]

function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <NavLink to="/" className="logo">
          <i className="fa-solid fa-dog" aria-hidden="true" />
          MASCOTITAS
        </NavLink>
        <nav className="main-nav" aria-label="Navegación principal">
          <ul>
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
