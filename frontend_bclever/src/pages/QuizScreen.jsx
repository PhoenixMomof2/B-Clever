import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadQuiz } from "../redux/action/quizAction"
import QuizResult from "./QuizResult"
import Question from "./Question"

const QuizScreen = ({retry}) => {  
  const { questions } = useSelector(store => store.quizReducer)
  const dispatch = useDispatch()
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [markedAnswers, setMarkedAnswers] = useState(0)
  const isQuestionEnd = currentQuestionIndex === questions.length

    useEffect(() => {
      dispatch(loadQuiz())       
    },[dispatch])

    const calculatedResult = () => {
      let correctTotal = 0
      questions.forEach((q) => {
        {q.choices.map((choice) => {
          if(choice.correct === true){
            correctTotal++
          }
          })
          return {
            total: questions.length,
            correctTotal: correctTotal, 
            percentage: Math.trunc((correctTotal / questions.length) * 100)
          }
        }
      })
    }
    

  return (
    <div>{ isQuestionEnd ? (
      <QuizResult 
      result={calculatedResult()}
      retry={retry}
      />
      ) : (
      <Question question={questions[currentQuestionIndex]}
        totalQuestions={questions.length}
        currentQuestion={currentQuestionIndex+1}
        setAnswer={(index) => {
          setMarkedAnswers((arr) => {
            let newArr = [...arr]
            newArr[currentQuestionIndex] = index
            return newArr
          })
          setCurrentQuestionIndex(currentQuestionIndex+1)
        }}
        />
      )}
    </div>
  )
}

export default QuizScreen