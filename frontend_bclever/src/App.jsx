import { createBrowserRouter, RouterProvider,  } from "react-router-dom"
import Login from "./forms/Login"
import Signup from "./forms/Signup"
import Main from "./pages/Main.jsx"
import KidsList from "./pages/KidsList"
import Settings from "./pages/Settings"
// import Profile from "./layouts/Profile"
import Error from "./pages/Error"
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      // loader: mainLoader,
      children: [
        {        
          index: true,
          path: "/settings",
          element: <Settings />,
          errorElement: <Error />,
          // action: 
        },
        {        
          path: "/signup",
          element: <Signup />,
          errorElement: <Error />,
          // action:
        },
        {        
          path: "/kids",
          element: <KidsList />,
          errorElement: <Error />,
          // action: 
        },
        {        
          path: "/login",
          element: <Login />,
          errorElement: <Error />,
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