import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  
  return (
    <div className="container-fluid">   
      <Navbar />
      <main>
        <Outlet />
      </main>      
    </div>
  )
}

export default Main