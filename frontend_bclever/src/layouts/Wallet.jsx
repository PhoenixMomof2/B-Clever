import React from 'react'
import { useSelector } from "react-redux"
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js/auto'
import KidsCard from '../pages/KidsCard'
import Slider from "react-slick"

const Wallet = () => {
  const kids  = useSelector(store => store.kidsReducer.kids)
  ChartJS.register(ArcElement, Legend, Tooltip)

  const data = {
    labels: kids.map((kid) => kid.name),
    datasets: [{
        label: "Kids Wallet Totals",
        data: kids.map((kid) => kid.wallet_total)
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
      <h1 className="font-semibold text-4xl text-center pb-6 border-b text-green-400">B-Clever Kids</h1>          
      <div className="md:max-w-[1480px] max-w-[600px] m-auto grid md:grid-cols-2">
        <div className="uppercase text-center text-gray-800 p-2 bg-white ">     
            <Doughnut data={data} />
        </div>   
        <Slider {...settings}>
           {kids.map((kid) => (
              <KidsCard key={kid.id} kid={kid}/> 
            ))}
        </Slider>
      </div>
    </div>
  )
}
export default Wallet