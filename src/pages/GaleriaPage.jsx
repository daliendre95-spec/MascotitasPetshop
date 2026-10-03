import Gallery from '../components/Gallery'
import { galleryItems } from '../assets/data/galeria'
import '../styles/page-hero.css'

function GaleriaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Galería de Mascotas</h1>
          <p>Conocé a los reyes y reinas de nuestra comunidad.</p>
        </div>
      </section>

      <Gallery items={galleryItems} />
    </>
  )
}

export default GaleriaPage
