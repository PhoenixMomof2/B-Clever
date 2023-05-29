import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart as ChartJS, Legend, Tooltip  } from 'chart.js/auto'
import Slider from "react-slick"
import AllowanceCard from '../pages/AllowanceCard'

const Profile = () => {
  const { currentKid, allowances }  = useSelector(store => store.kidsReducer)
  const [wallet, setWallet] = useState(currentKid.wallet_total)
  console.log(currentKid, allowances)
  
  // const wallet_total = currentKid.wallet_total
  const savings = (wallet * 0.30).toFixed(2)
  const wants = (wallet * 0.25).toFixed(2)    
  const needs = (wallet * 0.45).toFixed(2)
  
  ChartJS.register(ArcElement, Tooltip, Legend)

  const data = {
      labels: ['Savings', 'Wants', 'Needs'],
      datasets: [{
        label: 'Wallet',
        data: [savings, wants, needs]
    }]
  }
  
  useEffect(() => {   
      setWallet(currentKid.wallet_total)
  }, [currentKid.wallet_total, allowances])

  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  
  return (
    <div className="w-full bg-slate-300 py-12 border-transparent rounded-2xl shadow-xl">
    <h1 className="font-semibold text-4xl text-center pb-6 border-b text-green-400">B-Clever Kids</h1>          
    <div className="md:max-w-[1480px] max-w-[600px] m-auto grid md:grid-cols-2">
      <div className="uppercase text-center text-gray-800 p-2 bg-white ">          
            <h1 className="font-bold uppercase text-gray-600 text-center">{currentKid.name}'s has ${currentKid.wallet_total} in their wallet</h1>          
            <Doughnut data={data}/>    
          </div>
          <Slider {...settings}>
           {currentKid.allowances.map((allowance) => (
              <AllowanceCard key={allowance.id} allowance={allowance} currentKid={currentKid}/> 
            ))}
        </Slider>
      </div>
    </div>
  )
}
export default Profile
// src={require(`../images/${currentKid.avatar}`)} alt="kid-avatar"