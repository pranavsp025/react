import Login from "./pages/Login"
import CreateEmployee from "./pages/CreateEmployee"
import { useState } from "react"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import NotFound from "./pages/NotFound"
import HomeLayout from "./pages/HomeLayout"
import EmployeeList from "./pages/EmployeeList"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
    errorElement:<NotFound/>,
  },
  {
    path:"/employees",
    element:<HomeLayout/>,
    children:[{
      index:true,element:<CreateEmployee/>
    },{
      path:"list",index:true,element:<EmployeeList/>
    }
  ]
  }
]);

const App = () => {
  const [stateValue,setState] = useState(false)

  const handleLogin=(e)=>{
    e.preventDefault()
    setState(true)
  }

  // return <main>
  //   {
  //   stateValue? <CreateEmployee/>:<Login handleSubmit={handleLogin}/>
  //   }
  // </main>

  return(
    <div className="App">
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App;