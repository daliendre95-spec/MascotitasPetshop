import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/layout.css'

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
