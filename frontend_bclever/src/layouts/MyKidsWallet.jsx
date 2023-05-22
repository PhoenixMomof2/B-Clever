import React from 'react'
import { useSelector } from 'react-redux'
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart as ChartJS, Legend, Tooltip  } from 'chart.js/auto'
import Slider from "react-slick"
import ParentAllowanceCard from '../pages/ParentAllowanceCard'

const MyKidsWallet = () => {

  const currentParent = useSelector(store => store.kidsReducer)
  const kid = currentParent.kids[0]
  console.log(currentParent)
  const wallet_total = kid.wallet_total
  const savings = (wallet_total * 0.30).toFixed(2)
  const wants = (wallet_total * 0.25).toFixed(2)    
  const needs = (wallet_total * 0.45).toFixed(2)
  
  ChartJS.register(ArcElement, Tooltip, Legend)

  const data = {
      labels: ['Savings', 'Wants', 'Needs'],
      datasets: [{
        label: 'Wallet',
        data: [savings, wants, needs]
    }]
  }
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="w-full bg-slate-300 py-12 border-transparent rounded-2xl shadow-xl">
    <h1 className="font-semibold text-4xl text-center pb-6 border-b text-green-400">{kid.name}'s Wallet</h1>          
    <div className="md:max-w-[1480px] max-w-[600px] m-auto grid md:grid-cols-2">
      <div className="uppercase text-center text-gray-800 p-2 bg-white ">          
            <h1 className="font-bold uppercase text-gray-600 text-center">{kid.name}'s has ${kid.wallet_total} in his wallet</h1>          
            <Doughnut data={data}/>    
          </div>
          <Slider {...settings}>
           {kid.allowances.map((allowance) => (
              <ParentAllowanceCard key={allowance.id} allowance={allowance} kid={kid}/> 
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default MyKidsWallet