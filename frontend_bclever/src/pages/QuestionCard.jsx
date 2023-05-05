import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadQuiz } from "../redux/action/quizAction"

const QuestionCard = () => {
const { questions } = useSelector(store => store.quizReducer)
const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(loadQuiz())       
    },[dispatch])
  
  const [score, setScore] = useState(0)
  
  // helper functions
  const optionClicked = (correct) => {
    if (correct) {
      setScore(score + 1)
     } else {
      setScore(score)
    }
  }

  // const restartGame = () => {
  //   setScore(0)
    // setCurrentQuestion(0)
    // setFinalResults(false)
  // }

  return (
    <div className="container flex-auto bg-red-600 mx-auto px-20 shadow-md">
      <h1>Random Math Quiz</h1>
      <h2>Current Score: {score}</h2>
      <ul>
        {questions.map((q) => (<div key={q.id} className="container flex-auto bg-yellow-300 mx-auto px-20 shadow-md">
          <h2>{q.expression}</h2>
          {q.choices.map((c) => <li onClick={() => optionClicked(c.correct)} className="bg-green-500">
          
            {c.answer}
          </li>)}
        </div>
        ))}
      </ul>
    </div>
  )
}

export default QuestionCard