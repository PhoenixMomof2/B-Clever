import { createBrowserRouter, RouterProvider,  } from "react-router-dom"
import Login from "./forms/Login"
import Signup from "./forms/Signup"
import Main from "./pages/Main.jsx"
import Quiz from "./pages/Quiz.jsx"
import KidsList from "./pages/KidsList"
import KidsExcerpt from "./pages/KidsExcerpt"
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      // loader: mainLoader,
      children: [
        {        
          index: true,
          path: "/me",
          element: <KidsExcerpt />,
          // action: 
        },
        {
          path: "/kids",
          element: <KidsList />,
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
          //import { useGetKidsByIdQuery } from "../services/kids"
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