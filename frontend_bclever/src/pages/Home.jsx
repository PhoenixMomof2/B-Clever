import React from 'react'
import { useNavigate } from 'react-router-dom'
import moneyman from '../images/moneyman.jpg'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log("Let's Explore")
    navigate('/signup')
  }
  
  return (
    <div className="w-full bg-white">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 border border-3 border-teal-300 shadow-lg rounded-lg" src={moneyman} alt={moneyman} />
        <div className="md:max-w-[1480px] max-w-[600px] m-auto flex flex-col justify-center p-4">
          <p className="font-bold py-2 text-xl text-green-400 uppercase">Money, Money, Money.....</p>
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold py-2">Let's <span className="text-red-400">B-Clever</span> and earn some money!</h1>
          <p className="text-justify">Duis dolore do labore quis est aliqua. Consectetur ullamco commodo pariatur eiusmod quis. Non elit esse incididunt consectetur in est. Magna deserunt incididunt aliquip enim et mollit culpa incididunt reprehenderit ipsum amet eiusmod ipsum.</p>
          <button onClick={handleClick} className="bg-red-400 rounded-md font-bold w-[200px] my-6 mx-auto md:md-0 p-4 py-3 text-white">Get Started</button>
        </div>
      </div>
    </div>
  )
}
export default Home