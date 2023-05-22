import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from '@redux-devtools/extension'
import quizReducer from "../reducer/quizReducer"
import errorsReducer from "../reducer/errorsReducer"
import kidsReducer from "../reducer/kidsReducer"

  const reducer = 
    combineReducers({
      quizReducer,
      errorsReducer,
      kidsReducer      
 })
  
  let middleware = [];
  if (process.env.NODE_ENV === "development") {
    middleware = [...middleware, thunk, logger];
  } else {
    middleware = [...middleware, thunk];
  }
  const enhancer = composeWithDevTools(applyMiddleware(...middleware))
  
export const store = createStore(reducer, enhancer);