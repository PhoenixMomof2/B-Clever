import React from 'react'
import Header from '../layouts/Header'
import { Outlet } from 'react-router-dom'

const Main = () => {

  return (
    <>
      <Header />
      <main className="relative p-6">       
        <Outlet />  
      </main>    
    </>
  )
}

export default Main 