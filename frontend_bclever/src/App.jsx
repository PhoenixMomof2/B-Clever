import { createBrowserRouter, RouterProvider,  } from "react-router-dom"
import { useDispatch } from "react-redux"
import Login from "./forms/Login"
import Signup from "./forms/Signup"
import Main from "./pages/Main"
import KidsList from "./pages/KidsList"
import ParentDashboard from './pages/ParentDashboard'
import ParentLogin from "./forms/ParentLogin"
import ParentSignup from "./forms/ParentSignup"
import ParentList from "./components/ParentList"
import Wallet from "./layouts/Wallet"
import NotFound from "./pages/NotFound"
import Profile from "./pages/Profile"
import { useEffect } from "react"
import { loadKids, loadCurrentKid } from './redux/action/authAction'
import { loadParents } from './redux/action/parentAuthAction'
import { loadQuiz } from "./redux/action/quizAction"
import QuizScreen from "./pages/QuizScreen"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <NotFound />,
      // loader: mainLoader,
      children: [
        {              
          index: true,   
          path: "*",
          element: <Home />,
          errorElement: <NotFound />,
          // action:
        },
        {              
          path: "me",
          element: <Profile />,
          errorElement: <NotFound />,
          // action:
        },
        {                
          path: "parent_profile",
          element: <ParentDashboard />,
          errorElement: <NotFound />,
          // action:
        },
        {                
          path: "parents",
          element: <ParentList />,
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
          path: "new_quiz",
          element: <QuizScreen />,
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
          path: "signup_parent",
          element: <ParentSignup />,
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
          // action:  
        },
        {        
          path: "login_parent",
          element: <ParentLogin />,
          errorElement: <NotFound />,
          // action:  
        },
      ],
    },
  ])

  const App = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(loadKids())    
      dispatch(loadCurrentKid()) 
      dispatch(loadParents())    
      dispatch(loadQuiz()) 
    },[dispatch])

    return (
      <div>
        <RouterProvider router={router} />
        <ToastContainer />
      </div> 
    )
  }
export default App