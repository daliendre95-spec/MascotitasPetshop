import { Link } from 'react-router-dom'

import '../styles/card.css'

function Card({ image, title, description, linkTo = '/contacto', linkLabel = 'Consultar' }) {
  return (
    <article className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={linkTo} className="btn btn-secondary">
          {linkLabel}
        </Link>
      </div>
    </article>
  )
}

export default Card
