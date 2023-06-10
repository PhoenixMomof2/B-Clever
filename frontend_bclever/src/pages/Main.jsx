import React from 'react'
import Navbar from '../components/Navbar'
import ParentNavbar from '../layouts/ParentNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../layouts/Footer'
import { useSelector } from 'react-redux'

const Main = () => {
  const currentKid = useSelector(store => store.kidsReducer.currentKid)
  
  return (
    <>
      { currentKid ? <Navbar /> : <ParentNavbar/> }
      <main>       
        <Outlet />  
      </main>    
      <Footer />
    </>
  )
}

export default Main 