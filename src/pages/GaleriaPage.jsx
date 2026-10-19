import Gallery from '../components/Gallery'
import { fotosGaleria } from '../assets/data/galeria'
import '../styles/page-hero.css'

function GaleriaPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Galería de Mascotas</h1>
          <p>Conocé a los reyes y reinas de nuestra comunidad.</p>
        </div>
      </section>

      <Gallery items={fotosGaleria} />
    </div>
  )
}

export default GaleriaPage
