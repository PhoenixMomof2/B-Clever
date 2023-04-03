import { createBrowserRouter, RouterProvider,  } from "react-router-dom"
import { useDispatch } from "react-redux"
import Login from "./forms/Login"
import Signup from "./forms/Signup"
import Main from "./pages/Main.jsx"
import KidsList from "./pages/KidsList"
import Settings from "./pages/Settings"
// import Profile from "./layouts/Profile"
import NotFound from "./pages/NotFound"
// import { useSelector } from "react-redux"
import { useEffect } from "react"
import { loadKids } from './redux/action/kidsAction'
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <NotFound />,
      // loader: mainLoader,
      children: [
        {        
          index: true,
          path: "/settings",
          element: <Settings />,
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
        {
          path: "/logout", 
          // action: 
        }
      ],
    },
  ])

  const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(loadKids())      
    },[dispatch])

    return (
      <div className="">
        <RouterProvider router={router} />
      </div> 
    )
  }

export default App