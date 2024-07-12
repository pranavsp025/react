import CETextField from "../components/CETextField";
import "./CreateEmployee.scss"
import CEButton from "../components/CEButton";
import CESelect from "../components/CESelect";
import KvLogo from "../assets/kv-logo.png";
import icon from "../assets/icon.svg";
import { useEffect, useState ,useRef } from "react";
import CEForm from "./CEForm";



const CreateEmployee = () => {

    
    return <div>
        
        <main className="CEmain">
            <section>
                <h3 className="create">Create Employee</h3>
            </section>    
            <CEForm/> 
        </main>        
    </div>         
}

export default CreateEmployee;