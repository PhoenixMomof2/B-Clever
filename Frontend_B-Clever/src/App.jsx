import { createBrowserRouter, RouterProvider,  } from "react-router-dom"
import Login from "./forms/Login"
import Signup from "./forms/Signup"
import Main from "./pages/Main.jsx"
import Settings from "./pages/Settings.jsx"
import Quiz from "./pages/Quiz.jsx"
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      // loader: mainLoader,
      children: [
        {        
          index: true,
          path: "/settings",
          element: <Settings />,
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
          // action: 
        },
        {
          path: "/logout", 
          // action: logoutAction
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