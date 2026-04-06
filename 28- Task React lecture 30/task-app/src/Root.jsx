import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Components/Footer/Footer.jsx'
import NavBar from './Components/Navbar/NavBar.jsx'


export default function Root() {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}
