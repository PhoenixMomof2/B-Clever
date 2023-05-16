const initialState = {
  balance: 0.00  
}

const allowanceReducer = (state=initialState, action) => {

  switch(action.type) {
    case "CREATE_ALLOWANCE":
          return {
            ...state,           
            balance: action.payload,      
            
        }
        default: 
      return state
  }
}
export default allowanceReducer