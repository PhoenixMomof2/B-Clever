import { createBrowserRouter, RouterProvider,  } from "react-router-dom"
import { useDispatch } from "react-redux"
import Login from "./forms/Login"
import Signup from "./forms/Signup"
import Main from "./pages/Main"
import ParentDashboard from './pages/ParentDashboard'
import NewAllowanceForm from "./forms/NewAllowanceForm"
import EditAllowanceForm from './forms/EditAllowanceForm'
import EditKidAllowanceForm from './forms/EditKidAllowanceForm'
import Wallet from "./layouts/Wallet"
import MyKidsWallet from "./layouts/MyKidsWallet"
import NotFound from "./pages/NotFound"
import Profile from "./pages/Profile"
import { useEffect } from "react"
import { loadKids, loadCurrentKid } from './redux/action/kidsAction'
import { loadParents } from './redux/action/parentAuthAction'
import { loadAllowances, loadKidAllowances } from './redux/action/allowanceAction'
import { loadQuiz } from "./redux/action/quizAction"
import QuizScreen from "./pages/QuizScreen"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import About from "./pages/About"
import Explore from "./pages/Explore"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <NotFound />,
      // loader: mainLoader,
      children: [
        {              
          index: true,   
          path: "/",
          element: <Home />,
          errorElement: <NotFound />,
          // action:
        },
        {              
          path: "about",
          element: <About />,
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
          path: "allowances/new",
          element: <NewAllowanceForm />,          
          errorElement: <NotFound />,
          // action:
        },
        {                
          path: "allowances/:id/edit",
          element: <EditAllowanceForm />,          
          errorElement: <NotFound />,
          // action:
        },       
        {                
          path: "kid_allowances/:id/edit",
          element: <EditKidAllowanceForm />,          
          errorElement: <NotFound />,
          // action:
        },       
        {        
          path: "explore",
          element: <Explore />,
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
          path: "my_kids_wallet",
          element: <MyKidsWallet />,
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
          path: "login",
          element: <Login />,
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
      dispatch(loadAllowances())
      dispatch(loadKidAllowances())
    },[dispatch])

    return (
      <div>
        <RouterProvider router={router} />
        <ToastContainer />
      </div> 
    )
  }
export default App