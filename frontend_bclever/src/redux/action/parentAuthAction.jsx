import { setErrors, clearErrors } from '../../redux/action/errorsAction'
import { headers } from "../../context/Globals"

export const loadParents = () => {
  // thunk middleware uses these actions to make asynchronous calls
  // it expects a function to be returned
  // the function itself takes in a parameter called dispatch

  return dispatch => {
    // asynchronous calls
    fetch('/parents')
    .then(res => res.json())
    .then(data => {
      const action = { type: "LOAD_PARENTS", payload: data }
      dispatch(action)
    })
  }
} 

export const loadCurrentParent = () => { 
 
  return dispatch => {
   
      fetch('/parent_profile')
      .then(res => res.json())
      .then(data => {
        if(!data.errors){
          const action = { type: "LOGIN", payload: data }
          console.log(data, "Current Parent")
          dispatch(action)
        } else {
          dispatch(setErrors(data.errors))
        }
      })   
  }
} 

export const loginCurrentParent = (parent, navigate) => { 
  return dispatch => {
    // asynchronous calls    
    fetch('/login_parent', {
      method: "POST",
      headers,
      body: JSON.stringify(parent)
      })
      .then(res => res.json())
      .then((data) => {
      if (data.errors) {
        dispatch(setErrors(data.errors))    
      } else {
        const action = { type: "LOGIN", payload: data }
        dispatch(action)
        dispatch(clearErrors())
        navigate("/parent_profile") 
      }
    });  
  }
} 

export const signupParent = (parent, navigate) => {
  return dispatch => {
    fetch('/signup_parent', { 
        method: "POST",
      headers,
      body: JSON.stringify(parent),
      })
      .then(res => res.json())
      .then((data) => {
        if (data.errors) {
          dispatch(setErrors(data.errors))  
        } else {
        dispatch({ type: "SIGNUP", payload: data })
        dispatch({ type: "ADD_PARENT", payload: data }) 
        navigate("/me") 
      }
    })   
  }
}

export const logoutCurrentParent = () => {  
  // NOT USING THUNK - NO FETCH IN THIS ACTION
  return {
    type: "LOGOUT"
  }  
} 