import React from 'react'

const JoinScreen = ({start}) => {
  return (
    <div>
      <h2>Join Question</h2>
      <p>Let's see how clever you are, Munchkin!  You can earn as extra allowances by taking some math quizzes.  Then, you can decide what to do with your money, and see how good you are at saving.</p>
      <button onClick={start}>Start</button>
    </div>
  )
}

export default JoinScreen