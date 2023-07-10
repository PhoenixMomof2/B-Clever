// import React, { useState } from "react"
// import { useSelector } from "react-redux"
// // import Timer from "./Timer"
// import StartButton from "./StartButton"
// import QuizContainer from "./QuizContainer"

// const QuizScreen = () => {    
//   const { currentKid } = useSelector(store => store.kidsReducer)
//   const [started, setStarted] = useState(false)

//   return (  
//     <div className="w-full bg-slate-300 py-12 border-transparent rounded-2xl shadow-xl h-screen flex justify-center items-center">
//       <div className="md:max-w-[1480px] max-w-[600px] m-auto">    
//         {started ? (
//           <>
//             {/* <Timer countdown={countdown} />      */}
//             <QuizContainer />          
//           </>
//            ) : ( 
//         <div className="bg-purple-300 p-8 rounded-lg text-center border border-red-400">
//         <h1 className="text-5xl text-center font-medium inline-block">Hi <span className="animate-pulse font-bold text-5xl">👋🏽 </span><span className="text-yellow-400">{currentKid.name}</span></h1>
        
//         <h2 className="text-2xl py-8">Click <span className="underline">start</span> to play a math game and <span className="text-blue-400 font-bold uppercase">earn</span> an <span className="text-green-500 font-bold uppercase">allowance</span>!</h2>   
//         <StartButton className="text-center justify-center items-center" setStarted={setStarted}/>
//         </div>               
//         )}                 
//       </div>
//     </div>
//   )
//   }
//   export default QuizScreen

  import React, { useState, useRef, useEffect } from "react"
  import { useNavigate } from "react-router-dom"
  import { useDispatch, useSelector } from "react-redux"
  import timer_text from '../images/timer_text.png'
  import { addAllowance } from '../redux/action/allowanceAction'
  import { addResource, updateResourceCollection } from "../context/Globals"
  import { useAnimate, stagger } from "framer-motion"
  
  const randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const QuizScreen = () => {    
    const [timeLeft, setTimeLeft] = useState(20)
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
    
    // const [scope, animate] = useAnimate()
  
    const startQuiz = () => {
      // const sparkles = Array.from({ length: 20 });
      // const sparklesAnimation = sparkles.map((_, index) => [
      //   `.sparkle-${index}`,
      //   {
      //     x: randomNumberBetween(-100, 100),
      //     y: randomNumberBetween(-100, 100),
      //     scale: randomNumberBetween(1.5, 2.5),
      //     opacity: 1,
      //   },
      //   {
      //     duration: 0.4,
      //     at: "<",
      //   },
      // ]);
  
      // const sparklesFadeOut = sparkles.map((_, index) => [
      //   `.sparkle-${index}`,
      //   {
      //     opacity: 0,
      //     scale: 0,
      //   },
      //   {
      //     duration: 0.3,
      //     at: "<",
      //   },
      // ]);
  
      // const sparklesReset = sparkles.map((_, index) => [
      //   `.sparkle-${index}`,
      //   {
      //     x: 0,
      //     y: 0,
      //   },
      //   {
      //     duration: 0.000001,
      //   },
      // ]);
  
      // animate([
      //   ...sparklesReset,
      //   [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      //   ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      //   ["button", { scale: 1 }, { duration: 0.1 }],
      //   ...sparklesAnimation,
      //   [".letter", { y: 0 }, { duration: 0.000001 }],
      //   ...sparklesFadeOut,
      // ])
    
      const id = setInterval(() => {countdown()}, 1000)
      setIntervalId(id)
      setStarted(true)
    }    
  
    const countdown = () => {  
      const newBalance = scoreRef.current * 1.50
    
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
        console.log(updatedKid, "updatedKid")
        dispatch(addAllowance(newAllowance, navigate))
  
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
      }, [timeLeft, intervalId, idx, score])
      // updates references when the state changes (must link references to the values)
      
      useEffect(() => {
        return () => {
          clearInterval(intervalId)}
        }, [intervalId])
         
      const formatTime = (timeLeft) => {
        let minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0')
        let seconds = Math.floor(timeLeft % 60).toString().padStart(2, '0')
        return { minutes, seconds }
      }
         
      const goToNextQuestion = () => {
        setIdx(idx+1)
        setNextQuestion(questions[idx+1])      
      }
      // if else for last question
      
      const optionClicked = (correct) => {
        if (correct === true) {
          setScore(score + 1)  
          goToNextQuestion()
        } else {
          goToNextQuestion()
          setScore(score)
        }     
      }  
  
    const StartButton = () => {
      //ref={scope} className="animate"
      return (     
        <div >
          <button id="startButton" className="rounded-full border-2 border-green-500 px-6 py-2 text-2xl text-green-500 transition-colors hover:bg-green-200" onClick={startQuiz}>
            <span className="sr-only">Start</span>
            <span className="h-8 block overflow-hidden" aria-hidden>
              {["S", "t", "a", "r", "t"].map((letter, index) => (
                <span data-letter={letter} 
                className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]" 
                key={`${letter}-${index}`}>{letter}</span>
              ))}
            </span>
            <span aria-hidden className="absolute inset-0 block pointer-events-none -z-10">
              {Array.from({ length: 20 }).map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}>
              <path className="fill-green-500"strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              ))}
            </span>
          </button>
        </div> 
      )
    }
  
    const Timer = () => {
      return (     
        <div className="w-48 h-auto flex items-center justify-center relative md:w-24">      
          <div className="animate-spin-slow">
            <img
            priority="true"
            src={timer_text}
            alt="timer_text"
            className="w-40 h-40 animate-spin-slow"
            // remove if spin-slow doesn't work
            />   
          </div>
          <div className="flex items-center justify-center absolute text-blue-500 bg-red-300 w-24 h-24 rounded-full font-semibold">     
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>   
          <span className="text-blue-500"> {formatTime(timeLeft).minutes} : {formatTime(timeLeft).seconds} </span>                       
          </div>               
        </div>
      )
    }
  
    const QuizQuestion = ({ nextQuestion, optionClicked }) => {
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
  
    const Score = () => {
      return (
        <div className="bg-purple-400 text-white text-2xl font-bold uppercase rounded-lg text-center items-center p-3"> Score - {score}</div>
      )
    }
  
    const QuizContainer = () => {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  
            <div>
                   
            </div>
  
            <div className="items-center">          
              <Score />             
            </div>
  
            <div>
              <div className="col-span-2 text-center">
                <QuizQuestion nextQuestion={nextQuestion} optionClicked={optionClicked}/>
              </div>            
            </div>
  
          </div>
      );
    };
  
    return (  
      <div className="w-full bg-slate-300 py-12 border-transparent rounded-2xl shadow-xl h-screen flex justify-center items-center">
        <div className="md:max-w-[1480px] max-w-[600px] m-auto">    
          {started ? (
            <>
              <Timer timeLeft={timeLeft} />     
              <QuizContainer />          
            </>
             ) : ( 
          <div className="bg-purple-300 p-8 rounded-lg text-center border border-red-400">
          <h1 className="text-5xl text-center font-medium inline-block">Hi <span className="animate-pulse font-bold text-5xl">👋🏽 </span><span className="text-yellow-400">{currentKid.name}</span></h1>
          
          <h2 className="text-2xl py-8">Click <span className="underline">start</span> to play a math game and <span className="text-blue-400 font-bold uppercase">earn</span> an <span className="text-green-500 font-bold uppercase">allowance</span>!</h2>   
          <StartButton className="text-center justify-center items-center" />
          </div>               
          )}                 
        </div>
      </div>
    )
  }
  export default QuizScreen