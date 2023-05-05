import { setErrors } from './errorsAction'

export const startQuiz = () => {
  return dispatch => {
    fetch('/generate_expression')
    .then(res => res.json())
    .then(data => {
      if(!data.errors){
      const action = ({ type: "LOAD_QUESTION", payload: data })
      console.log(data, "startQuiz")
      dispatch(action)
      } else {
      dispatch(setErrors(data.errors))
      console.log(data.errors)
      }
    })
  }
}

export const loadQuiz = () => {
  return dispatch => {
    fetch('/set_quiz')
    .then(res => res.json())
    .then(data => {
      if(!data.errors){
      const action = ({ type: "LOAD_QUIZ", payload: data })
      console.log(data, "load quiz")
      dispatch(action)
      } else {
      dispatch(setErrors(data.errors))
      console.log(data.errors)
      }
    })
  }
}