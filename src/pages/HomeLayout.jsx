import { Outlet,useNavigate } from "react-router-dom";
import "./CreateEmployee.scss"
import KvLogo from "../assets/kv-logo.png";
import Aside from "./aside";
import { useEffect } from "react";
const HomeLayout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    useEffect(()=>{
        if(!token || token!=='true'){
            navigate('/');
        }
    },[token,navigate]);
    return(

        <div className="page">
        <header >
            <img src={KvLogo} alt="" srcset="" class="kv"/>
        </header>

        <Aside/>   
        <div className="content"><Outlet/></div>
        </div>
    );
};

export default HomeLayout;