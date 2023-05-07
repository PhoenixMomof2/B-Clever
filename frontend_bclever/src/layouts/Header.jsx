import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Header = () => {
  return (
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
  )
}

export default Header