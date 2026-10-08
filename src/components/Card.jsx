import { Link } from 'react-router-dom'

import '../styles/card.css'

function Card({ imagen, titulo, descripcion }) {
  return (
    <article className="card">
      <img src={imagen} alt={titulo} />
      <div className="card-body">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <Link to="/contacto" className="btn btn-secondary">
          Consultar
        </Link>
      </div>
    </article>
  )
}

export default Card
