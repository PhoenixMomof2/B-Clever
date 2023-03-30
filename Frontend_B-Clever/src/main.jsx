import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const store = configureStore({  
  reducer: rootReducer, 
  middleware: [thunk, logger], 
// Store has middleware added, because the middleware list was not customized
// Store specifically has the thunk and logger middleware applied
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>   
  </React.StrictMode>,
)
