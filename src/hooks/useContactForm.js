import { useState } from 'react'

export const INITIAL_FORM = {
  nombre: '',
  email: '',
  telefono: '',
  motivo: '',
  mascota: 'perro',
  intereses: [],
  comentarios: '',
}

function buildPayload(formData) {
  return {
    nombre: formData.nombre,
    email: formData.email,
    telefono: formData.telefono,
    motivo: formData.motivo,
    mascota: formData.mascota,
    intereses: formData.intereses,
    comentarios: formData.comentarios,
  }
}

/**
 * Custom hook: estado y handlers del formulario de contacto (TPF).
 * Registra cambios de inputs y submit en consola.
 */
export function useContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM)

  const logFieldUpdate = (field, value) => {
    console.log('[Contacto] input:', { campo: field, valor: value })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    logFieldUpdate(name, value)
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleInteresChange = (event) => {
    const { value, checked } = event.target
    setFormData((prev) => {
      const intereses = checked
        ? [...prev.intereses, value]
        : prev.intereses.filter((item) => item !== value)
      logFieldUpdate('intereses', intereses)
      return { ...prev, intereses }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = buildPayload(formData)
    console.log('[Contacto] submit:', payload)
    setFormData({ ...INITIAL_FORM, intereses: [] })
    console.log('[Contacto] reset: formulario limpiado tras enviar')
  }

  const handleReset = () => {
    setFormData(INITIAL_FORM)
    console.log('[Contacto] reset: formulario limpiado')
  }

  return {
    formData,
    handleChange,
    handleInteresChange,
    handleSubmit,
    handleReset,
  }
}
