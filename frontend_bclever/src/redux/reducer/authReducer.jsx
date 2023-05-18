import { addResource, updateResource, updateResourceCollection } from '../../context/Globals'

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
    case "ADD_KID_ALLOWANCE":
      console.log(action.payload)
    const kid = state.find(k => k.id === action.payload.kid_id)
    const updatedAllowances = addResource(kid.allowances, action.payload)
    const updatedKid = updateResourceCollection(...kid, kid.allowances, updatedAllowances)
      return updateResource(state, updatedKid);
    default: 
      return state
  }
}
export default authReducer