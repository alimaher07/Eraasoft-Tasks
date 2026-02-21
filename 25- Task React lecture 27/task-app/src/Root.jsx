import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Components/Footer/Footer.jsx'
import NavBar from './Components/Navbar/NavBar.jsx'
import HeroSection from './Components/HeroSection/HeroSection.jsx'
import OurFeatures from './Components/OurFeatures/OurFeatures.jsx'


export default function Root() {
  return (
    <>
    <NavBar />
    <Outlet />
    <OurFeatures />
    <Footer />
    </>
  )
}
