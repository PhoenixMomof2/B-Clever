// thunk requires returning a function
export const loadCurrentKid = () => { 
 
  return dispatch => {
   
      fetch('/me')
      .then(res => res.json())
      .then(data => {
        const action = { type: "LOAD_CURRENT_KID", payload: data}
        console.log(data, "me fetch")
        dispatch(action)
      })   
  }
} 

export const loginCurrentKid = (kid) => { 
  return dispatch => {
    // asynchronous calls    
      fetch('/login')
      .then(res => res.json())
      .then(kid => {
        const action = ({ type: "LOGIN", payload: { kid } })
        dispatch(action)
      })   
  }
} 

export const signupKid = (kid) => {
  return dispatch => {
      fetch('/signup')
      .then(res => res.json())
      .then(kid => {
        const action = ({ type: "SIGNUP", payload: { kid } })
        dispatch(action)
      })
   
  }
}

// export const logoutCurrentKid = () => {  
//     { type: "LOGOUT" }
// } 