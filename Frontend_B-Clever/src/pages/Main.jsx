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
        <Outlet reduxState={reduxState}/>
      </main>      
    </div>
  )
}

export default Main

// import { Navigate, Outlet, useLocation } from 'react-router-dom'
// import { useAuth } from '../hooks/useAuth'

// export function PrivateOutlet() {
//   const auth = useAuth()
//   const location = useLocation()

//   return auth.user ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} />
//   )
// }