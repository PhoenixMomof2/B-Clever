import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'

// redux provider
import { Provider } from "react-redux";
import { store } from "./redux/reducer/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>  
    <App />  
  </Provider>,
)