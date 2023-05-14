import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../layouts/Footer'

const Main = () => {

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

export default Main 