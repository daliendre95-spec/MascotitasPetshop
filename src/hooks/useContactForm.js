import { useState } from 'react'

const formularioVacio = {
  nombre: '',
  email: '',
  telefono: '',
  motivo: '',
  mascota: 'perro',
  intereses: [],
  comentarios: '',
}

// Hook del formulario de contacto (TPF - estados + consola)
export function useContactForm() {
  const [formData, setFormData] = useState(formularioVacio)
  const [mostrarAviso, setMostrarAviso] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setMostrarAviso(false)
    console.log(`Cambio en ${name}:`, value)
    setFormData({ ...formData, [name]: value })
  }

  const handleInteresChange = (event) => {
    const { value, checked } = event.target
    setMostrarAviso(false)

    let nuevosIntereses = [...formData.intereses]
    if (checked) {
      nuevosIntereses.push(value)
    } else {
      nuevosIntereses = nuevosIntereses.filter((item) => item !== value)
    }

    console.log('Intereses:', nuevosIntereses)
    setFormData({ ...formData, intereses: nuevosIntereses })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Formulario enviado:', formData)
    setFormData({ ...formularioVacio, intereses: [] })
    setMostrarAviso(true)
  }

  const handleReset = () => {
    setFormData(formularioVacio)
    setMostrarAviso(false)
    console.log('Formulario vaciado')
  }

  return {
    formData,
    mostrarAviso,
    handleChange,
    handleInteresChange,
    handleSubmit,
    handleReset,
  }
}
