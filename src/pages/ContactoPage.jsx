import Contact from '../components/Contact'
import '../styles/page-hero.css'

function ContactoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contacto</h1>
          <p>Estamos para ayudarte con tu pedido o cualquier consulta sobre productos.</p>
        </div>
      </section>

      <Contact />
    </>
  )
}

export default ContactoPage
