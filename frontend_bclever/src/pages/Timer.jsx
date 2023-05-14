import React, { useState } from 'react'

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(120)
  const [intervalId, setIntervalId] = useState(null)
  const [paused, setPaused] = useState(false)
  
  const startQuiz = () => {
    console.log("start clicked")
    const id = setInterval(() => {countdown(timeLeft)}, 1000)
    setIntervalId(id)
  }    
  
  const countdown = () => {  
    if(paused){return}    
    if (timeLeft > 0 && !paused) {
      setTimeLeft(timeLeft => timeLeft - 1)
    } else {
      clearInterval(intervalId)
      setIntervalId(null)
    }
    formatTime(timeLeft)
  }
  
  // create a tally score action
  // create a check answer action that adds to t correct count (marked Answers)
  // create an allowance calculator after quiz score tally ($1.50/correct answer)
  
  const pause = () => {
    let obj = {
      time: timeLeft
    }
    setPaused(true)
    console.log(`pausing`, obj)
  }
  
  const formatTime = (timeLeft) => {
    let minutes = Math.floor(timeLeft / 60)
    let seconds = Math.floor(timeLeft % 60)
    return { minutes, seconds }
  }
  console.log(formatTime(timeLeft))

  return (       
      <div className=" bg-green-300 text-white text-lg font-bold uppercase rounded-full p-2 absolute top-0 ml-2 mt-2">     
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>   
        <span>Timer {formatTime(timeLeft).minutes} : {formatTime(timeLeft).seconds}</span>        
        {/* <button className="rounded-full py-1 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider my-2 bg-yellow-300 text-white p-2 hover:shadow-inner transform hover:scale-125 hover:bg:opacity-50 transition ease-out duration-300" onClick={startQuiz}>Start</button>
        <button className="button my-2 bg-green-300 rounded-xl text-white p-2" onClick={pause}>Pause</button> */}
      </div>         
  )
}
export default Timer