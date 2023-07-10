import React, { useState, useRef } from 'react'

export const goToNextQuestion = (setNextQuestion, setIdx) => {
  setIdx(idx+1)
  setNextQuestion(questions[idx+1])      
}

export const optionClicked = (correct) => {
  if (correct === true) {
    setScore(score + 1)  
    goToNextQuestion()
  } else {
    goToNextQuestion()
    setScore(score)
  }     
}  

export const QuizQuestion = (optionClicked) => {
  const { questions } = useSelector(gameState => gameState.quizReducer)
  const indexRef = useRef(0)
  const [idx, setIdx] = useState(0)
  const [nextQuestion, setNextQuestion] = useState(questions[idx])

  return (
    <div className="bg-blue=500 p-4">
        {started ?
        (<div className="card-body">
          <div key={nextQuestion.id} className="button inline-flex items-center rounded-lg bg-yellow-300 px-3">
            <div className="inline-flex w-full justify-center rounded-full bg-purple-600 px-6 py-2 mx-3 text-2xl font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">{nextQuestion.expression}</div> <svg className="h-8 w-8 ml-3 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="8" x2="20" y2="8" />  <line x1="4" y1="16" x2="20" y2="16" /></svg>
            <div className="p-2 gap-4">
              {nextQuestion.choices.map((c) => 
                <button key={c.id} onClick={() => optionClicked(c.correct)}                    
                  className="inline-flex w-full justify-between items-center rounded-full bg-blue-400 hover:scale-110 ease-in-out duration-75 px-3 py-2 mx-3 text-2xl font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">
                  {c.answer}
                </button>
              )}
            </div>
          </div>
        </div>) : null}       
    </div>
  )
}