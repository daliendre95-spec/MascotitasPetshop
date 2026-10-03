import { useContactForm } from '../hooks/useContactForm'
import '../styles/contact.css'

const MOTIVO_OPTIONS = [
  { value: 'consulta', label: 'Consulta sobre producto' },
  { value: 'pedido', label: 'Realizar un pedido' },
  { value: 'envio', label: 'Consulta de envío' },
  { value: 'mayorista', label: 'Compra mayorista' },
]

const MASCOTA_OPTIONS = [
  { value: 'perro', label: 'Perro' },
  { value: 'gato', label: 'Gato' },
  { value: 'otro', label: 'Otra mascota' },
]

const INTERES_OPTIONS = [
  { value: 'alimento', label: 'Alimento' },
  { value: 'accesorios', label: 'Accesorios' },
  { value: 'higiene', label: 'Higiene y cuidado' },
]

const CONTACT_INFO = [
  { icon: 'fa-solid fa-location-dot', text: 'Av. Santa Fe 2456, CABA, Argentina' },
  { icon: 'fa-solid fa-phone', text: '+54 11 4789-1234' },
  { icon: 'fa-solid fa-envelope', text: 'hola@mascotitas.com.ar' },
  { icon: 'fa-solid fa-clock', text: 'Lunes a Sábado de 9:00 a 20:00 hs' },
]

function Contact() {
  const { formData, isSubmitted, handleChange, handleInteresChange, handleSubmit, handleReset } =
    useContactForm()

  return (
    <section className="contact-section">
      <div className="container contact-wrapper">
        <div className="contact-info">
          {CONTACT_INFO.map(({ icon, text }) => (
            <div key={text} className="contact-info-item">
              <i className={icon} aria-hidden="true" />
              <p>{text}</p>
            </div>
          ))}
        </div>

        <form className="contact-form" onSubmit={handleSubmit} onReset={handleReset}>
          {isSubmitted && (
            <div
              className="contact-success alert alert-success"
              role="status"
              aria-live="polite"
            >
              <i className="fa-solid fa-circle-check" aria-hidden="true" />
              <span>
                ¡Formulario enviado! En breve nos contactaremos con vos. ¡Gracias por escribirnos!
              </span>
            </div>
          )}

          <div className="form-group mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
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
            <label htmlFor="email" className="form-label">
              Email
            </label>
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
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>
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
            <label htmlFor="motivo" className="form-label">
              Motivo de contacto
            </label>
            <select
              id="motivo"
              name="motivo"
              className="form-select"
              value={formData.motivo}
              onChange={handleChange}
              required
            >
              <option value="">Seleccioná una opción</option>
              {MOTIVO_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <fieldset className="form-group mb-3">
            <legend>¿Qué mascota tenés?</legend>
            {MASCOTA_OPTIONS.map(({ value, label }) => (
              <label key={value}>
                <input
                  type="radio"
                  name="mascota"
                  value={value}
                  checked={formData.mascota === value}
                  onChange={handleChange}
                />
                {label}
              </label>
            ))}
          </fieldset>

          <fieldset className="form-group mb-3">
            <legend>¿Qué te interesa? (podés elegir varios)</legend>
            {INTERES_OPTIONS.map(({ value, label }) => (
              <label key={value}>
                <input
                  type="checkbox"
                  name="interes"
                  value={value}
                  checked={formData.intereses.includes(value)}
                  onChange={handleInteresChange}
                />
                {label}
              </label>
            ))}
          </fieldset>

          <div className="form-group mb-3">
            <label htmlFor="comentarios" className="form-label">
              Comentarios
            </label>
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
              <i className="fa-solid fa-paper-plane" aria-hidden="true" />
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
