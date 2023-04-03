export const loadKids = () => {
  // thunk middleware uses these actions to make asynchronous calls
  // it expects a function to be returned
  // the function itself takes in a parameter called dispatch

  return dispatch => {
    // asynchronous calls
    fetch('/kids')
    .then(res => res.json())
    .then(data => {
      const action = ({ type: "LOAD_KIDS", payload: data })
      dispatch(action)
    })
  }
} 

export const loginKid = (current) => {
 
  return dispatch => {
    // asynchronous calls
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      const action = ({ type: "LOGIN", payload: data })
      dispatch(action)
    })
  }
} 

export const signupKid = (data) => {
 
  return dispatch => {
    // asynchronous calls
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      const action = ({ type: "SIGNUP", payload: data })
      dispatch(action)
    })
  }
} 

export const ActionCreators = {
  createNewKid: (kid) => ({ type: "ADD_KID", payload: { kid } }),

  updateKidAvatar: (avatar) => ({ type: "UPDATE_AVATAR", payload: { avatar } }),

  updateKid: (kid) => ({ type: "UPDATE_USER", payload: { kid } }),

  formSubmissionStatus: (status) => ({ type: "FORM_SUBMISSION_STATUS", payload: { status }}),
}