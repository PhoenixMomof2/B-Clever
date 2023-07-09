import { setErrors, clearErrors } from './errorsAction'
import { headers } from '../../context/Globals'

export const loadKids = () => {
  // thunk middleware uses these actions to make asynchronous calls
  // it expects a function to be returned
  // the function itself takes in a parameter called dispatch

  return dispatch => {
    // asynchronous calls
    fetch('/kids')
    .then(res => res.json())
    .then(data => {
      const action = { type: "LOAD_KIDS", payload: data }
      dispatch(action)
    })
  }
} 

export const loadCurrentKid = () => {  
  return dispatch => {   
      fetch('/me')
      .then(res => res.json())
      .then(data => {
        if(!data.errors){
          const action = { type: "LOAD_CURRENT_KID", payload: data }
          console.log(data, "Current Kid")
          dispatch(action)
        } else {
          dispatch(setErrors(data.errors))
        }
      })   
  }
} 

export const loginCurrentKid = (kid, navigate) => { 
  return dispatch => {
    // asynchronous calls    
    fetch('/login_kid', {
      method: "POST",
      headers,
      body: JSON.stringify(kid)
      })
      .then(res => res.json())
      .then((data) => {
      if (data.errors) {
        dispatch(setErrors(data.errors))    
      } else {
        const action = { type: "LOGIN_KID", payload: data }
        dispatch(action)
        dispatch(clearErrors())
        navigate("/me") 
      }
    });  
  }
} 

export const logoutCurrentKid = () => {  
  return {type: "LOGOUT_KID"}  
} 