import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductosPage from './pages/ProductosPage'
import GaleriaPage from './pages/GaleriaPage'
import ContactoPage from './pages/ContactoPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="productos" element={<ProductosPage />} />
        <Route path="galeria" element={<GaleriaPage />} />
        <Route path="contacto" element={<ContactoPage />} />
      </Route>
    </Routes>
  )
}

export default App
