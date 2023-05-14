import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
// import { goToNextQuestion } from "../redux/action/quizAction";

const Question = () => {
  // const dispatch = useDispatch()
  // // const currentKid = useSelector(store => store.authReducer)
  const { questions, currentQuestionIndex } = useSelector(gameState => gameState.quizReducer)
  const startQuestion = questions[currentQuestionIndex]
  const scoreRef = useRef(0)
  const [score, setScore] = useState(scoreRef.current)

  // helper functions
  // ternary for points calculation
  const optionClicked = (correct) => {
    if (correct === true) {
      setScore(score + 1)
  //     dispatch(goToNextQuestion(scoreRef.current))
  //     //check length of questions array (if index is at 30, dispatch "calculatedResult")
  //     // redirect to results page, state can be used to tally and do updates to kid allowance
  //     // return { allowance: score * 1.50, kid_id: currentKid.id }
  //     // reducer is the more in depth version of updating state dispatch
  //    } else {
  //     setPoints(scoreRef.current + 0)
    }
  }
  // set question to appear every 10 seconds max for 1 minute.  Calculate score hat

  return (     
    <>    
      <div key={startQuestion.id} className="button inline-flex items-center rounded-lg bg-yellow-300 px-3">
        <button className="inline-flex w-full justify-center rounded-full bg-purple-600 px-3 py-2 m-3text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">{startQuestion.expression}</button> <svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="8" x2="20" y2="8" />  <line x1="4" y1="16" x2="20" y2="16" /></svg>
        <div className="p-2">
          {startQuestion.choices.map((c) => 
            <button key={c.id} onClick={() => optionClicked(c.correct)} 
            className="inline-flex w-full justify-center items-center rounded-full bg-green-600 px-3 py-2 m-3text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
              {c.answer}
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Question