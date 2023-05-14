import React from 'react'
import { useSelector } from 'react-redux'
import mbaku from '../images/mbaku.jpg'
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart as ChartJS, Legend, Tooltip  } from 'chart.js/auto'

const Profile = () => {
  const currentKid  = useSelector(store => store.authReducer.currentKid)
  ChartJS.register(ArcElement, Tooltip, Legend)
  const data = {
      labels: ['Savings', 'Wants', 'Needs'],
      datasets: [{
        label: 'Wallet',
        data: [currentKid.savings, currentKid.wants, currentKid.needs]
    }]
  }
  
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      <div className="bg-white border-transparent rounded-lg shadow-xl">
          <div className="pt-10 bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-center text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
              <h1 className="font-bold uppercase text-green-600">{currentKid.name}</h1>
              {/* <img className="inline-block h-20 w-20 rounded-full ring-2 ring-white" src={require(`../images/${currentKid.avatar}`)} alt="kid-avatar"
              /> */}
              <div className="">
                <img className="inline-block h-20 w-20 rounded-full ring-2 ring-white" src={mbaku} alt="kid-avatar"
                />
              </div>
          </div>
          <div className="p-2 text-center">
              <h1>Hey, {currentKid.name}</h1>
              <h2>Let's see how your budget is going!</h2>
              <p>You have ${currentKid.wallet}!</p>
              <p>You have ${currentKid.savings} in savings!</p>
              <p>You have ${currentKid.wants} to spend on wants!</p>
              <p>You have ${currentKid.needs} to spend on needs!</p>
          </div>
          <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
            <h1 className="font-bold uppercase text-gray-600 text-center">{currentKid.name}'s Wallet</h1>          
            <Doughnut data={data}/>    
          </div>
      </div>
    </div>
  )
}
export default Profile
// src={require(`../images/${currentKid.avatar}`)} alt="kid-avatar"