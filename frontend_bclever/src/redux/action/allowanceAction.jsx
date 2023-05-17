import { setErrors } from './errorsAction'

export const createAllowance = (newAllowance, navigate) => {
  return dispatch => {
    fetch('/allowances', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAllowance)
    })
      .then(resp => resp.json())
      .then(data => {
        if(data.errors) {
          dispatch(setErrors(data.errors));
        } else {
          const action = { type: "CREATE_ALLOWANCE", payload: data }         
          console.log(data, "create allowance")
          dispatch(action)
          navigate('/me')
        }          
    })    
  }
}