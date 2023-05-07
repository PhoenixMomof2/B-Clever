import React from 'react';
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const MoneyPie = ({chartData}) => {
  
  return (
    <div className="text-center" style={{width:600}}>
      <Doughnut data={chartData}/>    
    </div>
  )
}
export default MoneyPie