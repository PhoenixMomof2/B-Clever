import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart as ChartJS, Legend, Tooltip  } from 'chart.js/auto'
import Slider from "react-slick"
import ParentAllowanceCard from '../pages/ParentAllowanceCard'

const MyKidsWallet = () => {

  const { currentParent } = useSelector(store => store.kidsReducer)
  const kids = useSelector(store => store.kidsReducer.kids)
  const parentKid = currentParent.kids[0]
  const thisKid = kids.find(kid => kid.id === parentKid.id)
  const [wallet, setWallet] = useState(thisKid.wallet_total)

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
    setWallet(thisKid.wallet_total)
  }, [thisKid.wallet_total, thisKid.allowances])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="w-full bg-slate-300 py-12 border-transparent rounded-2xl shadow-xl">
    <h1 className="font-semibold text-4xl text-center pb-6 border-b text-green-400">{thisKid.name}'s Wallet</h1>          
    <div className="md:max-w-[1480px] sm:max-w-[600px] m-auto grid md:grid-cols-2">
      <div className="uppercase text-center text-gray-800 p-2 bg-white ">          
        <h1 className="font-bold uppercase text-gray-600 text-center">{thisKid.name}'s has ${thisKid.wallet_total} in his wallet</h1>          
         <Doughnut data={data}/>               
      </div>
        <Slider {...settings}>
          {thisKid.allowances.map((allowance) => (
            <ParentAllowanceCard key={allowance.id} allowance={allowance} thisKid={thisKid}/> 
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default MyKidsWallet