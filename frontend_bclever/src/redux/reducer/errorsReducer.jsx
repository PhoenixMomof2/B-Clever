const initialState = {
  errors: []
}

const errorsReducer = (state=initialState, action) => {
  switch(action.type){
    case "SET_ERRORS":
      return { ...state,
        errors: action.payload
      }      
    case "CLEAR_ERRORS":
      return []
    default:
      return state
  }
}

export default errorsReducer