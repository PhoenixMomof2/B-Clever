const initialState = {
  kids: [],
  currentKid: {},
  loggedIn: false
}

const authReducer = (state=initialState, action) => {

  switch(action.type) {
    case "LOAD_KIDS":
      return {
        ...state,
        kids: action.payload          
    }    
    case "LOGIN":
      return {
        ...state,
        currentKid: action.payload,
        loggedIn: true          
    } 
    case "ADD_KID":
      return {
        ...state, 
        kids: [...state.kids, action.payload],
        currentKid: action.payload, 
        loggedIn: true
    }
    case "SIGNUP":
      return {
        ...state,
        currentKid: action.payload,
        loggedIn: true          
    }          
    case "LOGOUT":
      return {
        ...state,
        currentKid: initialState.currentKid, // or = null
        loggedIn: false,       
      };
    default: 
      return state
  }
}
export default authReducer