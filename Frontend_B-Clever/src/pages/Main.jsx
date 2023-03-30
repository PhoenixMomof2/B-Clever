import React from 'react'
import Navbar from '../components/Navbar'
// import Header from '../layouts/Header'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Main = () => {
  const reduxState = useSelector((store) => store )
  console.log(reduxState)
  
  return (
    <div className="container-fluid">   
      <Navbar />
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>      
    </div>
  )
}

export default Main