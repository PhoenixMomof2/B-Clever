import React, { useRef, useState } from 'react'

const Score = () => {
  const [score, setScore] = useState(0)
  const scoreRef = useRef(0)

  return (
    <div ref={scoreRef} className="bg-purple-400 text-white text-2xl font-bold uppercase rounded-lg text-center items-center p-3"> Score - {score}</div>
  )
}
export default Score