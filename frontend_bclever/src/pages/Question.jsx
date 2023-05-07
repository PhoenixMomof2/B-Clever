import React, { useRef, useEffect, useState, useCallback } from 'react'
import { flushSync } from 'react-dom'

const Question = ({question, totalQuestions, currentQuestion, setAnswer}) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const timer = useRef(null)
  const progressBar = useRef(null)

  const nextQuestion = useCallback(() => {
    if(timer.current){
      clearTimeout(timer.current)
    }
    flushSync(() => {
      setAnswer(selectedOption)
    })
    setSelectedOption(null)
  })

  useEffect(() => {
    progressBar.current.classList.remove("active")
    setTimeout(() => {
      progressBar.current.classList.add("active")
    },0)
    timer.current = setTimeout(nextQuestion, 10*1000) // 10 seconds
    return nextQuestion
  }, [nextQuestion])
  
  return (
    <div className="question">
      <div className="progress-bar" ref={progressBar}></div>
      <div className="question-count">
        <b> {currentQuestion} </b>
        of 
        <b> {totalQuestions} </b>
      </div>
      <div className="main">
        <div className="title">
          <span>Question:</span>
          <p>{question.expression}</p>
        </div>
        <div className="options">
          {
            question.choices.map((choice, index) => {
              return (
                <div className={index === selectedOption ? "option active" : "option"} 
                key={index}
                onClick={()=>setSelectedOption(index)}
                >
                  {choice}
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="control">
        <button onclick={nextQuestion}>
          Next Question
        </button>
      </div>
    </div>
  )
}

export default Question