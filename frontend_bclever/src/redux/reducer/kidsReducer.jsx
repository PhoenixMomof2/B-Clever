const initialState = {
  kids: [],
  currentKid: null,
  loggedIn: false
}

const kidsReducer = (state=initialState, action) => {
  
  switch(action.type) {
    case "LOAD_KIDS":
      return {
        ...state,
        kids: action.payload          
    }    
      default:
    return state;
  }
}   

export default kidsReducer