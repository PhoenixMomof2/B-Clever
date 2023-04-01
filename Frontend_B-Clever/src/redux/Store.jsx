import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import kidsReducer from '../slices/kidsReducer'
import quizReducer from '../slices/quizReducer'

const store = configureStore({  
  reducer: {
  kid: kidsReducer,
  quiz: quizReducer
  }, 
    
  middleware: [thunk, logger], 
// Store has middleware added, because the middleware list was not customized
// Store specifically has the thunk and logger middleware applied
})

// import { combineReducers } from "@reduxjs/toolkit"
// import errorsReducer from "./reducers/errorsReducer"
// import kidsReducer from "./reducers/kidsReducer"
// import quizReducer from "./reducers/quizReducer"

// export default combineReducers({
//   errorsReducer,
//   kidsReducer,
//   quizReducer
// })

export default store