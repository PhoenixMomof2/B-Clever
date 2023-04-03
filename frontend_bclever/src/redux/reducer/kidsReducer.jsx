const initialState = {
  kids: [],
  currentKid: null,
  loggedIn: false
}

export const kidsReducer = (state=initialState, action) => {
  
  switch(action.type) {
    case "LOAD_KIDS":
      return {
        kids: action.payload,
        currentKid: null,
        loggedIn: false        
    }
    case "LOGIN":
      return {
        ...state,
        kid: action.payload,
        currentKid: state.payload.kid,
        loggedIn: true          
      }
    case "UPDATE_KID":
      return {
        ...state,
        kid: action.payload.kid,
        formSubmitted: false // after update user formsubmition reset
      }
    case "UPDATE_AVATAR":
      return {
        ...state,
        kid: {
          ...state.avatar,
          avatar: action.payload.image
        }
      }
    case "FORM_SUBMISSION_STATUS":
      return {
        ...state,
        formSubmitted: action.payload.status
      }
      default:
    return state;
  }
}
    
const formState = {
    kid: {
      name: '',
      age: '',
      avatar: '',
      grade: '',
      password: '',
      passwordConfirmation: ''
  }, 
  formSubmitted: false
}

export const signupReducer = (state=formState, action) => {
  
  return {
    ...state,
    kid: action.payload,
    currentKid: state.payload.kid,
    loggedIn: true,
    formSubmitted: false // after create kid form submission reset
  }
}
    
   
   