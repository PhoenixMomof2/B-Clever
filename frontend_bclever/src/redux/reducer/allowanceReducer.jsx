import { updateResource } from "../../context/Globals"

const initialState = {
  allowances: []  
}

const allowanceReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_ALLOWANCES":
      // return new non destructive state
      return action.payload
    case "ADD_ALLOWANCE":
      return {
        ...state,
        allowance: action.payload             
      }                
    case "DELETE_ALLOWANCE":
      return state.filter(allowance => allowance.id !== action.payload)
    case "EDIT_ALLOWANCE":
      return updateResource(state, action.payload) 
    default:
      return state
  }
}
export default allowanceReducer