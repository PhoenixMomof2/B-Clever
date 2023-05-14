const gameState = {
  questions: [],   
  markedAnswers: [],
  currentQuestionIndex: 0
}
  // receiver of values (logic should be done in the components)
const quizReducer = (state=gameState, action) => {
    switch(action.type) {
        case "LOAD_QUIZ":
          return {
            ...state,
            questions: action.payload
        }  
        case "START_QUIZ":
          return {
            ...state,           
            questions: action.payload,      
            
        }
        case "NEXT_QUESTION":
          return {
            ...state, 
            questions: action.payload,      
            markedAnswers: action.payload.markedAnswers,
            currentQuestionIndex: action.payload.currentQuestionIndex+1            
        }
        case "RESET_QUIZ":
          return {
            ...state, 
            questions: [],
            markedAnswers: [],
            currentQuestionIndex: 0
          }
        default:
            return state
    }
}

export default quizReducer