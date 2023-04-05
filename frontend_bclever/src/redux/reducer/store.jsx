import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from '@redux-devtools/extension'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import quizReducer from "./quizReducer"
import errorsReducer from "../reducer/errorsReducer"
import authReducer from "../reducer/authReducer";

const reducers = persistReducer(
  { storage: storage, key: "a27" },
  combineReducers({
    quizReducer,
    errorsReducer,
    authReducer
  })
);

let middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(...middleware)));
