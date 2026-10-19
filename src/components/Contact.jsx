import { useContactForm } from '../hooks/useContactForm'
import '../styles/contact.css'

function Contact() {
  const { formData, mostrarAviso, handleChange, handleInteresChange, handleSubmit, handleReset } =
    useContactForm()

  return (
    <section className="contact-section">
      <div className="container contact-wrapper">
        <div className="contact-info">
          <div className="contact-info-item">
            <i className="fa-solid fa-location-dot" />
            <p>Av. Santa Fe 2456, CABA, Argentina</p>
          </div>
          <div className="contact-info-item">
            <i className="fa-solid fa-phone" />
            <p>+54 11 4789-1234</p>
          </div>
          <div className="contact-info-item">
            <i className="fa-solid fa-envelope" />
            <p>hola@mascotitas.com.ar</p>
          </div>
          <div className="contact-info-item">
            <i className="fa-solid fa-clock" />
            <p>Lunes a Sábado de 9:00 a 20:00 hs</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} onReset={handleReset}>
          {mostrarAviso && (
            <p className="contact-success alert alert-success">
              <i className="fa-solid fa-circle-check" /> Recibimos tu mensaje. Te vamos a
              contactar pronto.
            </p>
          )}

          <div className="form-group mb-3">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-control"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              className="form-control"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="11 1234-5678"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="motivo">Motivo de contacto</label>
            <select
              id="motivo"
              name="motivo"
              className="form-select"
              value={formData.motivo}
              onChange={handleChange}
              required
            >
              <option value="">Seleccioná una opción</option>
              <option value="consulta">Consulta sobre producto</option>
              <option value="pedido">Realizar un pedido</option>
              <option value="envio">Consulta de envío</option>
              <option value="mayorista">Compra mayorista</option>
            </select>
          </div>

          <fieldset className="form-group mb-3">
            <legend>¿Qué mascota tenés?</legend>
            <label>
              <input
                type="radio"
                name="mascota"
                value="perro"
                checked={formData.mascota === 'perro'}
                onChange={handleChange}
              />
              Perro
            </label>
            <label>
              <input
                type="radio"
                name="mascota"
                value="gato"
                checked={formData.mascota === 'gato'}
                onChange={handleChange}
              />
              Gato
            </label>
            <label>
              <input
                type="radio"
                name="mascota"
                value="otro"
                checked={formData.mascota === 'otro'}
                onChange={handleChange}
              />
              Otra mascota
            </label>
          </fieldset>

          <fieldset className="form-group mb-3">
            <legend>¿Qué te interesa? (podés elegir varios)</legend>
            <label>
              <input
                type="checkbox"
                name="interes"
                value="alimento"
                checked={formData.intereses.includes('alimento')}
                onChange={handleInteresChange}
              />
              Alimento
            </label>
            <label>
              <input
                type="checkbox"
                name="interes"
                value="accesorios"
                checked={formData.intereses.includes('accesorios')}
                onChange={handleInteresChange}
              />
              Accesorios
            </label>
            <label>
              <input
                type="checkbox"
                name="interes"
                value="higiene"
                checked={formData.intereses.includes('higiene')}
                onChange={handleInteresChange}
              />
              Higiene y cuidado
            </label>
          </fieldset>

          <div className="form-group mb-3">
            <label htmlFor="comentarios">Comentarios</label>
            <textarea
              id="comentarios"
              name="comentarios"
              className="form-control"
              value={formData.comentarios}
              onChange={handleChange}
              placeholder="Contanos qué producto buscás o tu consulta..."
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              <i className="fa-solid fa-paper-plane" />
              Enviar
            </button>
            <button type="reset" className="btn btn-secondary">
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
