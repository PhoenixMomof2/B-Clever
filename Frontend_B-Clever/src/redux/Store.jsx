import { configureStore } from '@reduxjs/toolkit'
// import { PreloadedState } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import kidsReducer from '../slices/kidsSlice'
import quizReducer from '../slices/quizSlice'
import countReducer from '../slices/countSlice'
import { kidsApi } from '../services/kids'

const store = () => configureStore({  
  reducer: {
    [kidsApi.reducerPath]: kidsApi.reducer,
    kids: kidsReducer,
    quiz: quizReducer,
    counter: countReducer
  }, 
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kidsApi.middleware),
    thunk, 
    logger,    
// Store has middleware added, because the middleware list was not customized
// Store specifically has the thunk and logger middleware applied
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
export const kidState = store.getState
export default store