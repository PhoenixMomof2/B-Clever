import React, { useState } from 'react'
import { useSelector } from "react-redux"
import MoneyPie from './MoneyPie'

const Wallet = () => {
  const { kids } = useSelector(store => store.authReducer.kids)
  console.log(kids, "kids")
  const [kidData, setKidData] = useState({
    labels: kids.map((kid) => kid.name),
    datasets: [{
        label: "Kids Wallet Totals",
        data: kids.map((kid) => kid.wallet.total)
      }]
  })
  
  return (
    <div className="flex flex-row flex-wrap flex-grow mt-2 p-5">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <div className="bg-white border-transparent rounded-lg shadow-xl">
          <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
            <h5 className="font-bold uppercase text-gray-600 text-center">Kid's Total Wallets</h5>          
              <MoneyPie chartData={kidData}/>          
          </div>
        </div>   
      </div>
    </div>
  )
}

export default Wallet