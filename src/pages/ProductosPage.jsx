import Card from '../components/Card'
import { productos } from '../assets/data/productos'
import '../styles/page-hero.css'
import '../styles/cards-section.css'

function ProductosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Nuestros Productos</h1>
          <p>Todo lo que necesitás para el cuidado, nutrición y diversión de tu mascota.</p>
        </div>
      </section>

      <section className="cards-section">
        <div className="cards-grid">
          {productos.map((producto) => (
            <Card key={producto.id} {...producto} />
          ))}
        </div>
      </section>
    </>
  )
}

export default ProductosPage
