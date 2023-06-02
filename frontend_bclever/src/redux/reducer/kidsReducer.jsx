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
    case "LOAD_ALLOWANCES":
      return {
        ...state,
        allowances: action.payload, 
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
        currentKid: action.payload      
      }
    case "SIGNUP":
      return {
        ...state,
        currentKid: action.payload
      }          
    case "LOGOUT":
      return {
        ...state,
        currentKid: initialState.currentKid,
        loggedIn: false,       
        }          
    case "ADD_ALLOWANCE":
      const updatedAllowances = [...state.allowances, action.payload]
      const updatedKid = {...state.currentKid, allowances: updatedAllowances, wallet_total: action.payload.kid.wallet_total }
      const updateKids =  state.kids.map((kid) => kid.id === updatedKid.id ? updatedKid : kid)
      return {...state, allowances: updatedAllowances, currentKid: updatedKid, kids: updateKids}    
    case "EDIT_ALLOWANCE":
      const editedAllowances = state.allowances.map(allowance => allowance.id === action.payload.id ? action.payload : allowance)
      const editedKid = {...state.currentKid, allowances: editedAllowances, wallet_total: action.payload.kid.wallet_total }
      const updated_Kids = state.kids.map((kid) => kid.id === editedKid.id ? editedKid : kid)
      return {...state, allowances: editedAllowances, currentKid: editedKid, kids: updated_Kids}
    case "DELETE_ALLOWANCE":
      const deletedAllowance = state.allowances.find(allowance => allowance.id === action.payload)
      const filteredAllowances = state.allowances.filter(allowance => allowance.id !== action.payload)
      const updatedWalletTotal = state.currentKid.wallet_total - deletedAllowance.balance    
      const updatedKidAfterDelete = {
        ...state.currentKid,
        allowances: filteredAllowances,
        wallet_total: updatedWalletTotal
      }
      const updated_kids = state.kids.map((kid) => kid.id === updatedKidAfterDelete.id ? updatedKidAfterDelete : kid)
      return {...state, allowances: filteredAllowances, currentKid: updatedKidAfterDelete, kids: updated_kids}
    case "ADD_PARENT_ALLOWANCE":
      const parents_kid = state.currentParent.kids.find((kid) => kid.id === action.payload.kid_id) 
      const updatedKidAllowances = [...state.allowances, action.payload]
      const updatedParentKid = {...parents_kid, allowances: updatedKidAllowances, wallet_total: action.payload.kid.wallet_total }
      const updatedKids = state.kids.map((kid) => kid.id === updatedParentKid.id ? updatedParentKid : kid)
      return {...state, allowances: updatedKidAllowances, currentKid: updatedParentKid, kids: updatedKids}    
    case "EDIT_PARENT_ALLOWANCE":
      const editedParentAllowances = state.allowances.map(allowance => allowance.id === action.payload.id ? action.payload : allowance)
      const editedParentKid = {...state.currentKid, allowances: editedParentAllowances, wallet_total: action.payload.kid.wallet_total }
      const updated_Parent_Kids = state.kids.map((kid) => kid.id === editedParentKid.id ? editedParentKid : kid)
      return {...state, allowances: editedAllowances, currentKid: editedParentKid, kids: updated_Parent_Kids} 
    case "DELETE_PARENT_ALLOWANCE":
    const deletedParentAllowance = state.allowances.find(allowance => allowance.id === action.payload)
    const filteredParentAllowances = state.allowances.filter(allowance => allowance.id !== action.payload)
    const updatedWalletTotalAfterDelete = state.currentKid.wallet_total - deletedParentAllowance.balance    
    const updatedKidAfterParentDelete = {
      ...state.currentKid,
      allowances: filteredParentAllowances,
      wallet_total: updatedWalletTotalAfterDelete
    }
    const updated_kids_after_delete = state.kids.map((kid) => kid.id === updatedKidAfterParentDelete.id ? updatedKidAfterParentDelete : kid)
    return {...state, allowances: filteredParentAllowances, currentKid: updatedKidAfterParentDelete, kids: updated_kids_after_delete}   
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
        currentParent: action.payload
    }
    case "SIGNUP_PARENT":
      return {
        ...state,
        currentParent: action.payload.parent,
        parents: [...state.parents, action.payload.parent],
        kids: [...state.kids, action.payload.kid],
        allowances: [...state.allowances, action.payload.allowance]                
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