import React from "react"
// import Question from "./Question"
import Timer from "../pages/Timer"
// import Score from "../pages/Score"
import CMLOGO_withName from '../images/CMLOGO_withName.jpg'

const QuizScreen = ({startQuiz}) => {  
  
  return (    
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">        
      <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
        <img src={CMLOGO_withName} alt={CMLOGO_withName} className=""/>
        <div className="bg-secondary-100 text-secondary-200 text-xs font-bold uppercase rounded-full p-10 ml-2 mt-2">                          
          <Timer />
        </div>
      </div>
    </div>    
  )
}
export default QuizScreen