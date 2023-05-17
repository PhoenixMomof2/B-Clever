import { useState } from 'react'
import { setErrors } from './errorsAction'

export const VisibilityToggle = () => {
  const [visible, setVisibility] = useState(false)
  return setVisibility(true)
}

export const loadQuiz = () => {
  return dispatch => {
    fetch('/new_quiz')
    .then(res => res.json())
    .then(data => {
      if(!data.errors){
      const action = { type: "LOAD_QUIZ", payload: data }
      console.log(data, "load quiz")
      dispatch(action)
      } else {
      dispatch(setErrors(data.errors))
      console.log(data.errors)
      }
    })
  }
}