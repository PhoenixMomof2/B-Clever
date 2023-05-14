// import React, { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { loadQuiz } from "../redux/action/quizAction"
// import QuizScreen from "./QuizScreen"
// import JoinScreen from "./JoinScreen"

// const QuestionCard = () => {
  // const { questions, currentQuestionIndex, time, score } = useSelector(gameState => gameState.quizReducer)

//   const [startQuestion, setStartQuestion] = useState(questions[currentQuestionIndex])
//   const [nextQuestion, setNextQuestion] = useState(questions[currentQuestionIndex + 1])
  

//   // helper functions
//   const optionClicked = (correct) => {
//     if (correct) {
//       setTotal(score + 1)
//       setNextQuestion()
//      } else {
//       setTotal(score)
//     }
//   }

//   return (   
//     <div className="w-full md:w-1/2 xl:w-1/3 p-6">
//       <div className="bg-white border-transparent rounded-lg shadow-xl">
//         <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
//         {startQuestion ? (
//           <QuizScreen retry={()=>setStartQuestion(false)}/>
//         ) : (
//           <JoinScreen start={()=>setStartQuestion(true)}/>
//         )}
//         <h1 className="bg-red-600">Random Math Question</h1>
//         <h2 className="bg-blue-700">Current Score: {score}</h2>
//         <div className="col-span-12">
//           <ul>
//             {questions.map((q) => (<div key={q.id} className="button inline-flex items-center rounded-lg bg-yellow-300 px-3">
//                 <button className="inline-flex w-full justify-center rounded-full bg-purple-600 px-3 py-2 m-3text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">{q.expression}</button> <svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="8" x2="20" y2="8" />  <line x1="4" y1="16" x2="20" y2="16" /></svg>
//               <div className="p-2">
//               {q.choices.map((c) => 
//                 <button key={c.id} onClick={() => optionClicked(c.correct)} type="button"
//                 className="inline-flex w-full justify-center items-center rounded-full bg-green-600 px-3 py-2 m-3text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
//                   {c.answer}
//                 </button>
//               )}
//               </div>
//               </div>
//             ))}
//           </ul>
//         </div>
//         </div> 
//       </div>
//     </div>    
//   )
// }

// export default QuestionCard