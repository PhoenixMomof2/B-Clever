import { createSlice } from '@reduxjs/toolkit'

const messageArray = [
  {
    id: 1, 
    title: "Help me!"
  },
  {
    id: 2, 
    title: "Please help me!"
  },
  {
    id: 3, 
    title: "No seriously, HELP!"
  }
]
export const kidsSlice = createSlice({
  name: "kid",
  initialState: messageArray,
  reducers: {
    login: (kid) => {
    setKid(kid)
    setLoggedIn(true)
    },
    logout: () => {
    setKid({})
    setLoggedIn(false)
    },
    signup: (kid) => {
      setKid(kid)
      setLoggedIn(true)
    }
  }
})

export const { login, logout, signup } = kidsSlice.actions
export default kidsSlice.reducer

// import { createReducer } from '@reduxjs/toolkit'
// import React, { useEffect, useState } from 'react'

  // const [kids, setKids] = useState([])
  // const [kid, setKid] = useState({})
  // const [loggedIn, setLoggedIn] = useState(false)
  // const [errors, setErrors] = useState([])
  
// useEffect(() => {
//   fetch("/me")
//     .then((res) => res.json())
//     .then((kid) => {
//       if (kid.id) {
//         setKid(kid);
//         setLoggedIn(true); //keeps kid logged in when page is refreshed
//       }
//     })
// }, [])

// const initialState = {
//   kids: [], 
//   current_kid: null,
//   loggedIn: false
// }