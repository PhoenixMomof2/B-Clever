import { createBrowserRouter, RouterProvider,  } from "react-router-dom"
import { useDispatch } from "react-redux"
import Login from "./forms/Login"
import Signup from "./forms/Signup"
import Main from "./pages/Main"
import KidsList from "./pages/KidsList"
import Wallet from "./layouts/Wallet"
import NotFound from "./pages/NotFound"
import Profile from "./pages/Profile"
import { useEffect } from "react"
import { loadKids, loadCurrentKid } from './redux/action/authAction'
import QuestionCard from "./pages/QuestionCard"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <NotFound />,
      // loader: mainLoader,
      children: [
        {              
          index: true,   
          path: "me",
          element: <Profile />,
          errorElement: <NotFound />,
          // action:
        },
        {        
          path: "wallet",
          element: <Wallet />,
          errorElement: <NotFound />,
          // action: 
        },
        {        
          path: "set_quiz",
          element: <QuestionCard />,
          errorElement: <NotFound />,
          // action: 
        },
        {        
          path: "signup",
          element: <Signup />,
          errorElement: <NotFound />,
          // action:
        },
        {        
          path: "kids",
          element: <KidsList />,
          errorElement: <NotFound />,
          // action: 
        },
        {        
          path: "login",
          element: <Login />,
          errorElement: <NotFound />,
          // action: login 
        },
      ],
    },
  ])

  const App = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(loadKids())    
      dispatch(loadCurrentKid()) 
    },[dispatch])

    return (
      <div>
        <RouterProvider router={router} />
      </div> 
    )
  }
export default App