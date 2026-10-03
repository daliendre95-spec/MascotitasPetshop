import { useState } from 'react'

import '../styles/contact.css'

const INITIAL_FORM = {
  nombre: '',
  email: '',
  telefono: '',
  motivo: '',
  mascota: 'perro',
  intereses: [],
  comentarios: '',
}

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
  const [formData, setFormData] = useState(INITIAL_FORM)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleInteresChange = (event) => {
    const { value, checked } = event.target
    setFormData((prev) => ({
      ...prev,
      intereses: checked
        ? [...prev.intereses, value]
        : prev.intereses.filter((item) => item !== value),
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const payload = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      motivo: formData.motivo,
      mascota: formData.mascota,
      intereses: formData.intereses,
      comentarios: formData.comentarios,
    }

    console.log('Datos del formulario de contacto:', payload)
  }

  const handleReset = () => {
    setFormData(INITIAL_FORM)
  }

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
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="11 1234-5678"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="motivo">Motivo de contacto</label>
            <select
              id="motivo"
              name="motivo"
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

          <fieldset className="form-group">
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

          <fieldset className="form-group">
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

          <div className="form-group">
            <label htmlFor="comentarios">Comentarios</label>
            <textarea
              id="comentarios"
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
              placeholder="Contanos qué producto buscás o tu consulta..."
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn">
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
