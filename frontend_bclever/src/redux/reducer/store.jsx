import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from '@redux-devtools/extension'
import quizReducer from "../reducer/quizReducer"
import errorsReducer from "../reducer/errorsReducer"
import authReducer from "../reducer/authReducer"
import parentAuthReducer from "../reducer/parentAuthReducer";
import allowanceReducer from "../reducer/allowanceReducer";

  const reducer = 
    combineReducers({
      quizReducer,
      errorsReducer,
      authReducer,
      parentAuthReducer,
      allowanceReducer
    })
  
  let middleware = [];
  if (process.env.NODE_ENV === "development") {
    middleware = [...middleware, thunk, logger];
  } else {
    middleware = [...middleware, thunk];
  }
  const enhancer = composeWithDevTools(applyMiddleware(...middleware))
  
export const store = createStore(reducer, enhancer);