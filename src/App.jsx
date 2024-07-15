import Login from "./pages/Login"
import CreateEmployee from "./pages/CreateEmployee"
import { useState,useReducer } from "react"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import NotFound from "./pages/NotFound"
import HomeLayout from "./pages/HomeLayout"
import EmployeeList from "./pages/EmployeeList"
import EditEmployee from "./pages/EditEmployee"
import EmployeeDetails from "./pages/EmployeeDetails"
import employeesRecord from "./components/EmployeeRecords.json"
import reducer from "./useReducer.js"


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
    },{
      path:"edit/:id",index:true,element:<EditEmployee/>
    }
    ,{
      path:"details/:id",index:true,element:<EmployeeDetails/>
    }

  ]
  }
]);

const App = () => {
  


  return(
    <div className="App">
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App;