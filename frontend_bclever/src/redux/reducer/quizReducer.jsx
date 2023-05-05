export const formatTime = time => {
    if (time < 60) {
      return time < 10 ? `0${time}s` : `${time}s`;
    } else {
      return Math.floor(time / 60) + 'm' + (time % 60) + 's';
    }
  } 

const initialState = {
    questions: [],
    question: {}
}

const quizReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOAD_QUIZ":
          return {
            ...state,
            questions: action.payload      
        }
        case "LOAD_QUESTION":
          return {
            ...state,
            question: action.payload      
        }     
        default:
            return state
    }
}

export default quizReducer