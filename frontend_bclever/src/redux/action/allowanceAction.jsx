import { setErrors } from './errorsAction'
import { headers } from '../../context/Globals'

export const loadAllowances = () => {  
  return dispatch => {   
    fetch('/allowances')
    .then(res => res.json())
    .then(data => {
      const action = { type: "LOAD_ALLOWANCES", payload: data }
      dispatch(action)
    })
  }
} 

export const loadKidAllowances = () => { 
  return dispatch => {
    fetch('/kid_allowances')
    .then(res => res.json())
    .then(data => {
      const action = { type: "LOAD_KID_ALLOWANCES", payload: data }
      dispatch(action)
    })
  }
} 

export const addAllowance = (allowance, navigate) => {
  return dispatch => {
    fetch('/allowances', {
      method: "POST",
      headers,
      body: JSON.stringify({allowance})
    })
      .then(resp => resp.json())
      .then(data => {
        if(data.errors) {
          dispatch(setErrors(data.errors));
        } else {
          const action = { type: "ADD_ALLOWANCE", payload: data }         
          console.log(data, "add allowance")
          dispatch(action)
          navigate('/me')
        }          
    })    
  }
}

export const addParentAllowance = (allowance, navigate) => {
  return dispatch => {
    fetch('/parent_allowances', {
      method: "POST",
      headers,
      body: JSON.stringify({allowance})
    })
      .then(resp => resp.json())
      .then(data => {
        if(data.errors) {
          dispatch(setErrors(data.errors));
        } else {
          const action = {type: "ADD_PARENT_ALLOWANCE", payload: data}         
          console.log(data, "add parent allowance")
          dispatch(action)
          navigate('/my_kids_wallet')
        }          
    })    
  }
}


export const editAllowance = (id, editedAllowance, navigate) => {
  return dispatch => {
    fetch(`/allowances/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedAllowance)
    })
    .then(resp => resp.json())
    .then(data => {
      const action = {type: "EDIT_ALLOWANCE", payload: data}
      dispatch(action);
      navigate('/me')
    })
  }
}

export const editKidAllowance = (id, editedAllowance, navigate) => {
  return dispatch => {
    fetch(`/kid_allowances/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedAllowance)
    })
    .then(resp => resp.json())
    .then(data => {
      const action = {type: "EDIT_PARENT_ALLOWANCE", payload: data}
      console.log(data, "data")
      dispatch(action);
      navigate('/my_kids_wallet')
    })
  }
}

export const deleteAllowance = (id) => {
  return dispatch => {
    fetch(`/allowances/${id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => {
      if(res.ok) {
        dispatch({type: "DELETE_ALLOWANCE", payload: id})
      }
    })
  }
}
export const deleteParentAllowance = (id) => {
  return dispatch => {
    fetch(`/kid_allowances/${id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => {
      if(res.ok) {
        dispatch({type: "DELETE_PARENT_ALLOWANCE", payload: id})
      }
    })
  }
}