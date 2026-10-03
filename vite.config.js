import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ruta del repo en GitHub Pages: https://usuario.github.io/MascotitasPetshop/
export default defineConfig({
  plugins: [react()],
  base: '/MascotitasPetshop/',
})
