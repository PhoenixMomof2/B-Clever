const gameState = {
  questions: [],   
}
  // receiver of values (logic should be done in the components)
const quizReducer = (state=gameState, action) => {
    switch(action.type) {
        case "LOAD_QUIZ":
          return {
            ...state,
            questions: action.payload
          }          
        default:
            return state
    }
}
export default quizReducer