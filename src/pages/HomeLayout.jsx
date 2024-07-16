import { Outlet,useNavigate } from "react-router-dom";
import "./CreateEmployee.scss"
import KvLogo from "../assets/kv-logo.png";
import Aside from "./aside";
import { useEffect,useReducer } from "react";
import reducer from "../useReducer";
import employeesRecord from "../components/EmployeeRecords.json"

const HomeLayout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const [state,dispatch] = useReducer(reducer,{employees:employeesRecord});

    useEffect(()=>{
        if(token=='false'){
            navigate('/');
        }
    },[token,navigate]);
    return(
        <div className="page">
        <header >
            <img src={KvLogo} alt="" srcset="" className="kv"/>
        </header>
        <Aside/>
        <div className="content"><Outlet context={{state,dispatch}}/></div>
        </div>
    );
};

export default HomeLayout;