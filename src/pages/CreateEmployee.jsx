import CETextField from "../components/CETextField";
import "./CreateEmployee.scss"
import CEButton from "../components/CEButton";
import CESelect from "../components/CESelect";
import KvLogo from "../assets/kv-logo.png";
import icon from "../assets/icon.svg";
import { useEffect, useState ,useRef } from "react";
import CEForm from "./CEForm";
import { useOutletContext } from "react-router-dom";



const CreateEmployee = () => {
    const {state ,dispatch}=useOutletContext();

    
    return <div>
        
        <main className="CEmain">
            <section>
                <h3 className="create">Create Employee</h3>
            </section>    
            <CEForm state={state} dispatch={dispatch}/> 
        </main>        
    </div>         
}

export default CreateEmployee;