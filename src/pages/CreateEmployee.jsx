import CETextField from "../components/CETextField";
import "./CreateEmployee.scss"
import CEButton from "../components/CEButton";
import CESelect from "../components/CESelect";
import KvLogo from "../assets/kv-logo.png";
import icon from "../assets/icon.svg";
import { useEffect, useState ,useRef } from "react";
import CEForm from "./CEForm";



const CreateEmployee = () => {

    const [employeeName,setEmployeeName]=useState('');
    const [employeeId,setEmployeeId]=useState('')
    const [joiningDate,setJoiningDate]=useState('');
    const [role,setRole]=useState('')
    const [status,setStatus]=useState('');
    const [experience,setExperience]=useState('')
    const [address,setAddress]=useState('');
    // const [isError,setError]=useState(false)
    const userRef=useRef(null)

    useEffect(()=>{
        focusInput()
    },[])

    const focusInput = () => {
        if (userRef.current) {
          userRef.current.focus();
        }
      };

    const onEmployeeNameChange = (e) => {  
        setEmployeeName(e.target.value)
        }
    const onEmployeeIdChange=(e)=>{
        setEmployeeId(e.target.value)
    }
    const onJoiningDateChange = (e) => {  
        setJoiningDate(e.target.value)
        }
    const onExperienceChange=(e)=>{
        setExperience(e.target.value)
    }
    const onAddressChange = (e) => {  
        setAddress(e.target.value)
        }
    const onRoleChange=(e)=>{
        setRole(e.target.value)
    }
    const onStatusChange = (e) => {  
        setStatus(e.target.value)
    }

    
    
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