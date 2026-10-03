import '../styles/gallery.css'

function Gallery({ items = [] }) {
  if (items.length === 0) {
    return (
      <section className="gallery-section">
        <div className="container">
          <p className="text-center text-muted">No hay imágenes para mostrar.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-grid">
          {items.map(({ id, src, alt }) => (
            <div key={id} className="gallery-item">
              <img src={src} alt={alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
