import Card from '../components/Card'
import { listaProductos } from '../assets/data/productos'
import '../styles/page-hero.css'
import '../styles/cards-section.css'

function ProductosPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Nuestros Productos</h1>
          <p>Todo lo que necesitás para el cuidado, nutrición y diversión de tu mascota.</p>
        </div>
      </section>

      <section className="cards-section">
        <div className="cards-grid">
          {listaProductos.map((prod) => (
            <Card
              key={prod.id}
              imagen={prod.imagen}
              titulo={prod.titulo}
              descripcion={prod.descripcion}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductosPage
