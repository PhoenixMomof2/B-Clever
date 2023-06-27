const initialState = {
  kids: [],
  allowances: [],
  currentKid: {},
  loggedIn: false,
  parents: [],
  kid_allowances: [],
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
    case "LOAD_KID_ALLOWANCES":
      return {
        ...state,
        kid_allowances: action.payload, 
      }
    case "SIGNUP_KID":
      return {
        ...state,
        currentKid: action.payload,
        kids: [...state.kids, action.payload]
      }
    case "LOGIN":
      return {
        ...state,
        currentKid: action.payload,
        allowances: action.payload.allowances,        
        loggedIn: true          
      }
    case "LOGOUT":
      return initialState
      // {
      //   ...state,
      //   currentKid: {},
      //   loggedIn: false,   
        // allowances:[],  
        // kid_allowances: [],
        // }          
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
      const parents_kid = state.kids.find(kid => kid.id === state.currentParent.kids[0].id)
      const updatedKidAllowances = [...parents_kid.allowances, action.payload]
      const updatedParentKid = {...parents_kid, allowances: updatedKidAllowances, wallet_total: action.payload.kid.wallet_total }
      const updatedKids = state.kids.map((kid) => kid.id === updatedParentKid.id ? updatedParentKid : kid)
      return {...state, kid_allowances: updatedKidAllowances, currentKid: updatedParentKid, kids: updatedKids}    
    case "EDIT_PARENT_ALLOWANCE":
      const parent_kid = state.kids.find(kid => kid.id === action.payload.kid.id)
      console.log(action.payload, "EDIT_PARENT_ALLOWANCE")
      const editedParentAllowances = parent_kid.allowances.map(allowance => allowance.id === action.payload.id ? action.payload : allowance)
      const editedParentKid = {...parent_kid, allowances: editedParentAllowances, wallet_total: action.payload.kid.wallet_total }
      const updated_Parent_Kids = state.kids.map((kid) => kid.id === editedParentKid.id ? editedParentKid : kid)
      return {...state, kid_allowances: editedParentAllowances, currentKid: editedParentKid, kids: updated_Parent_Kids} 
    case "DELETE_PARENT_ALLOWANCE":
      const pKid = state.kids.find(kid => kid.id === state.currentParent.kids[0].id)
      const deletedParentAllowance = pKid.allowances.find(allowance => allowance.id === action.payload)
      const filteredParentAllowances = pKid.allowances.filter(allowance => allowance.id !== deletedParentAllowance.id)
      const updatedWalletTotalAfterDelete = pKid.wallet_total - deletedParentAllowance.balance    
      const updatedKidAfterParentDelete = {
        ...pKid,
        allowances: filteredParentAllowances,
        wallet_total: updatedWalletTotalAfterDelete
      }
      const updated_kids_after_delete = state.kids.map((kid) => kid.id === updatedKidAfterParentDelete.id ? updatedKidAfterParentDelete : kid)     
      return {...state, kid_allowances: filteredParentAllowances, currentKid: updatedKidAfterParentDelete, kids: updated_kids_after_delete}   
    case "LOAD_PARENTS":
      return {
        ...state,
        parents: action.payload        
    }    
    case "LOGIN_PARENT":
      return {
        ...state,
        currentParent: action.payload,
        parent_loggedIn: true,
    } 
    case "SIGNUP_PARENT":
      return {
        ...state,
        currentParent: action.payload,
        parents: [...state.parents, action.payload],                   
    }          
    case "LOGOUT_PARENT":
      return {
        ...state,
        currentParent: {}, 
        parent_loggedIn: false, 
        currentKid: {},
      };
      // initialState
    default: 
      return state
  }
}
export default kidsReducer