const initialState = {
  parents: [],
  currentParent: {},
  parent_loggedIn: false
}

const parentAuthReducer = (state=initialState, action) => {

  switch(action.type) {
    case "LOAD_PARENTS":
      return {
        ...state,
        parents: action.payload          
    }    
    case "LOGIN":
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
    case "SIGNUP":
      return {
        ...state,
        currentParent: action.payload,
        parent_loggedIn: true          
    }          
    case "LOGOUT":
      return {
        ...state,
        currentParent: initialState.currentParent, // or = null
        parent_loggedIn: false,       
      };
    default: 
      return state
  }
}
export default parentAuthReducer