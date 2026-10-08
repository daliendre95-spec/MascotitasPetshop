import { NavLink } from 'react-router-dom'

import '../styles/navbar.css'

function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <NavLink to="/" className="logo">
          <i className="fa-solid fa-dog" />
          MASCOTITAS
        </NavLink>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/productos" className={({ isActive }) => (isActive ? 'active' : '')}>
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink to="/galeria" className={({ isActive }) => (isActive ? 'active' : '')}>
                Galería
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
