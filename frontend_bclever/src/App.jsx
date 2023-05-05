import { createBrowserRouter, RouterProvider,  } from "react-router-dom"
import { useDispatch } from "react-redux"
import Login from "./forms/Login"
import Signup from "./forms/Signup"
import Main from "./pages/Main.jsx"
import KidsList from "./pages/KidsList"
import MathQuiz from "./pages/MathQuiz"
import Profile from "./layouts/Profile"
import NotFound from "./pages/NotFound"
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
          path: "/quiz",
          element: <MathQuiz />,
          errorElement: <NotFound />,
          // action: 
        },
        {        
          path: "/set_quiz",
          element: <QuestionCard />,
          errorElement: <NotFound />,
          // action: 
        },
        {        
          path: "/profile",
          element: <Profile />,
          errorElement: <NotFound />,
          // action:
        },
        {        
          path: "/signup",
          element: <Signup />,
          errorElement: <NotFound />,
          // action:
        },
        {        
          path: "/kids",
          element: <KidsList />,
          errorElement: <NotFound />,
          // action: 
        },
        {        
          path: "/login",
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
      <div className="">
        <RouterProvider router={router} />
      </div> 
    )
  }
export default App