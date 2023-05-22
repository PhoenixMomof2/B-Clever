import { updateResourceCollection } from "../../context/Globals"

const initialState = {
  kids: [],
  allowances: [],
  currentKid: {},
  loggedIn: false,
  parents: [],
  currentParent: {},
  parent_loggedIn: false
}

const kidsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_KIDS":
      return {
        ...state,
        kids: action.payload,
      }    
    case "LOGIN":
      return {
        ...state,
        currentKid: action.payload,
        allowances: action.payload.allowances,        
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
        currentKid: initialState.currentKid,
        loggedIn: false,       
        }          
    case "ADD_ALLOWANCE":
      const kid = state.kids.find(k => k.id === action.payload.kid_id)
      const updatedAllowances = [...state.allowances, action.payload]
      const updatedKid = {...kid, allowances: updatedAllowances }
      return {...state, allowances: updatedAllowances, currentKid: updatedKid}    
    case "ADD_PARENT_ALLOWANCE":
      const parents_kid = state.kids.find(k => k.id === action.payload.kid_id) 
      const updatedKidAllowances = [...state.allowances, action.payload]
      const updatedParentKid = updateResourceCollection(parents_kid, "allowances", updatedKidAllowances)
      return {...state, allowances: updatedKidAllowances, currentKid: updatedParentKid}    
    case "EDIT_ALLOWANCE":
      const kid_to_edit = state.kids.find(k => k.id === action.payload.kid_id)
      const editedAllowances = state.allowances.map(allowance => allowance.id === action.payload.id ? action.payload : allowance)
      const editedKid = {...kid_to_edit, allowances: editedAllowances }
      return {...state, allowances: editedAllowances, currentKid: editedKid}
    case "DELETE_ALLOWANCE":
      const kid_to_delete_from = state.kids.find(k => k.id === action.payload.kid_id)
      const filteredAllowances = state.allowances.filter(allowance => allowance.id !== action.payload)
      const updatedKidAfterDelete = updateResourceCollection(kid_to_delete_from, "allowances", filteredAllowances)
      return {...state, allowances: filteredAllowances, currentKid: updatedKidAfterDelete}
    case "LOAD_PARENTS":
    return {
      ...state,
        parents: action.payload          
    }    
    case "LOGIN_PARENT":
      return {
        ...state,
        currentParent: action.payload,
        parent_loggedIn: true          
    } 
    case "ADD_PARENT":
      return {
        ...state, 
        parents: [...state.parents, action.payload],
        currentParent: action.payload, 
        parent_loggedIn: true
    }
    case "SIGNUP_PARENT":
      return {
        ...state,
        currentParent: action.payload,
        parent_loggedIn: true          
    }          
    case "LOGOUT_PARENT":
      return {
        ...state,
        currentParent: state.currentParent, 
        allowances: action.payload.allowances, 
        parent_loggedIn: false,       
      };
    default: 
      return state
  }
}
export default kidsReducer