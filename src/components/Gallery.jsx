import '../styles/gallery.css'

function Gallery({ items }) {
  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-grid">
          {items.map((foto) => (
            <div key={foto.id} className="gallery-item">
              <img src={foto.src} alt={foto.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
