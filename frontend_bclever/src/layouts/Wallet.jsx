import React from 'react'
import { useSelector } from "react-redux"
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js/auto'

const Wallet = () => {
  const kids  = useSelector(store => store.authReducer.kids)
  ChartJS.register(ArcElement, Legend, Tooltip)
  const data = {
    labels: kids.map((kid) => kid.name),
    datasets: [{
        label: "Kids Wallet Totals",
        data: kids.map((kid) => kid.wallet)
      }]
  }
  
  return (
    <div className="flex flex-row flex-wrap flex-grow mt-2 p-5">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <div className="bg-white border-transparent rounded-lg shadow-xl">
          <div className="pt-10 bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-center text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
            <h1 className="font-bold uppercase text-gray-600 text-center">B-Clever Wallets</h1>          
              <Doughnut data={data}/>          
          </div>
        </div>   
      </div>
    </div>
  )
}

export default Wallet