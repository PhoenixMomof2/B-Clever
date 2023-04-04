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

// export const loadUsers = (loggedIn, setLoading) => {
//   return dispatch => {
//     if (loggedIn){
//       fetch('/users')
//       .then(res => res.json())
//       .then(data => {
//         const action = { type: "LOAD_USERS", payload: data }
//       })
//       setLoading(false)
//       dispatch(action)
//     }
//   }
// }