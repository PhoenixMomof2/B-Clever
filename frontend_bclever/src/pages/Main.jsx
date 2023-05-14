import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../layouts/Footer'

const Main = () => {

  return (
    <>
      <Navbar />
      <main className="max-w-[1480px] w-full h-full m-auto flex justify-between items-center bg-slate-300">       
        <Outlet />  
      </main>    
      <Footer />
    </>
  )
}

export default Main 