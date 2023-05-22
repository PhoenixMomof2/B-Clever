import React, { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import CMLOGO_withName from '../images/CMLOGO_withName.jpg'
import { addAllowance } from '../redux/action/allowanceAction'
import { addResource, updateResourceCollection } from "../context/Globals"


const QuizScreen = () => {    
  const [timeLeft, setTimeLeft] = useState(15)
  const timeLeftRef = useRef(15)
  const intervalIdRef = useRef(null)
  const [intervalId, setIntervalId] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentKid } = useSelector(store => store.kidsReducer)

  const { questions } = useSelector(gameState => gameState.quizReducer)
  const indexRef = useRef(0)
  const [idx, setIdx] = useState(0)
  const [nextQuestion, setNextQuestion] = useState(questions[idx])

  const [started, setStarted] = useState(false)
  const [score, setScore] = useState(0)
  const scoreRef = useRef(0)

  const startQuiz = () => {
    const id = setInterval(() => {countdown()}, 1000)
    setIntervalId(id)
    setStarted(true)
    console.log("start clicked", id)
  }    

  const countdown = () => {  
    const newBalance = scoreRef.current * 1.50
    
    console.log(timeLeftRef.current, "countdown")  
    if (timeLeftRef.current > 0) {
      setTimeLeft(timeLeft => timeLeft - 1)
    } else if (timeLeftRef.current === 0) {
      console.log("time's up", `You earned $${newBalance}`)

      const newAllowance = {
        balance: parseFloat(newBalance),
        kid_id: currentKid.id,
        parent_id: currentKid.parent.id
      }

      console.log(newAllowance, "newAllowance")
      const updatedAllowances = addResource(currentKid.allowances, newAllowance)
      const updatedKid = updateResourceCollection(currentKid, "allowances", updatedAllowances)
      console.log(updatedKid)
      dispatch(addAllowance(newAllowance, navigate))

      // navigate('/me')
      setStarted(false)
      setTimeLeft(0)
      clearInterval(intervalIdRef.current)
      setIntervalId(null)
    } 
    formatTime(timeLeftRef.current)
  }
  
  
  useEffect(() => {
    timeLeftRef.current = timeLeft    
    intervalIdRef.current = intervalId
    indexRef.current = idx
    scoreRef.current = score
    console.log(indexRef.current, "useEffect idx")
    console.log(scoreRef.current, "useEffect score")
    console.log(timeLeftRef.current, "useEffect timeLeft") 
  }, [timeLeft, intervalId, idx, score])
  // updates references when the state changes (must link references to the values)
  
  useEffect(() => {
    return () => {
      console.log("clean up", intervalId)
      clearInterval(intervalId)}
    }, [intervalId])
    
    // create a check answer action that adds to t correct count (marked Answers)
    // create a tally score action
    // create an allowance calculator after quiz score tally ($1.50/correct answer)
    
    const formatTime = (timeLeft) => {
      let minutes = Math.floor(timeLeft / 60)
      let seconds = Math.floor(timeLeft % 60)
      return { minutes, seconds }
    }
    console.log(formatTime(timeLeft))
    
    const goToNextQuestion = () => {
      const stop = questions.length
      // if(questions[])
      setIdx(idx+1)
      setNextQuestion(questions[idx+1])
      console.log(stop, idx)
      console.log(nextQuestion, "nextQuestion")
    }
    // if else for last question
    
    const optionClicked = (correct) => {
      if (correct === true) {
        setScore(score + 1)  
        goToNextQuestion()
        // dispatch(addAllowance())
      } else {
        goToNextQuestion()
        setScore(score)
      }
      console.log(score, "score after optionClicked")
    }  
      
  return (    
    <div className="w-full bg-slate-500 py-24 px-8">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto border-2 border-gray-500 bg-blue-200 py-8">
        <div className="md:container md:mx-auto gap-4 py-3 grid grid-cols-3">
        <img src={CMLOGO_withName} alt={CMLOGO_withName} className="rounded-lg w-24 h-24"/>
          <h1 className="text-3xl text-center font-medium">Hello, <span className="text-yellow-400">{currentKid.name}</span> Let's <span className="text-red-400">earn</span> some <span className="text-green-500">money</span>!</h1>        
          <img src={CMLOGO_withName} alt={CMLOGO_withName} className="rounded-lg w-24 h-24"/>                  
        </div>      
      <div className="text-center grid grid-cols-3">
        <div className="self-center">
          <div className="inline-block justify-center p-3 bg-green-300 text-white text-lg font-bold uppercase rounded-lg mt-2">     
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>   
              <span>{formatTime(timeLeft).minutes} : {formatTime(timeLeft).seconds}</span>   
            <div className="flex gap-4">
              <button className="rounded-full py-1 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider my-2 bg-yellow-300 text-white p-2 hover:shadow-inner transform hover:scale-125 hover:bg:opacity-50 transition ease-out duration-300" onClick={startQuiz}>Start</button>
            </div>     
          </div>               
        </div>
        {started ?
        (<div className="self-center">
          <div key={nextQuestion.id} className="button inline-flex items-center rounded-lg bg-yellow-300 px-3">
            <button className="inline-flex w-full justify-center rounded-full bg-purple-600 px-3 py-2 m-3text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">{nextQuestion.expression}</button> <svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="8" x2="20" y2="8" />  <line x1="4" y1="16" x2="20" y2="16" /></svg>
            <div className="p-2">
              {nextQuestion.choices.map((c) => 
                <button key={c.id} onClick={() => optionClicked(c.correct)} 
                className="inline-flex w-full justify-center items-center rounded-full bg-green-600 px-3 py-2 m-3text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                  {c.answer}
                </button>
              )}
            </div>
          </div>
        </div>) : null}
        <div className="self-center">      
          <div className="inline-block justify-center p-3 bg-red-300 text-white text-lg font-bold uppercase rounded-lg mt-2">Score: {score}</div>
        </div>
        </div> 
      </div>
    </div>    
  )
}
export default QuizScreen