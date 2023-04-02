import { createBrowserRouter, RouterProvider,  } from "react-router-dom"
import Login from "./forms/Login"
import Signup from "./forms/Signup"
import Main from "./pages/Main.jsx"
import Quiz from "./pages/Quiz.jsx"
import Profile from "./layouts/Profile"
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      // loader: mainLoader,
      children: [
        {        
          index: true,
          path: "/me",
          element: <Profile />,
          // action: 
        },
        {        
          path: "/signup",
          element: <Signup />,
          // action:
        },
        {        
          path: "/quiz",
          element: <Quiz />,
          // action: 
        },
        {        
          path: "/login",
          element: <Login />,
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

    return (
      <div className="">
        <RouterProvider router={router} />
      </div> 
    )
  }

export default App