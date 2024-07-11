import CETextField from "../components/CETextField";
import "./CreateEmployee.scss"
import CEButton from "../components/CEButton";
import CESelect from "../components/CESelect";
import KvLogo from "../assets/kv-logo.png";
import icon from "../assets/icon.svg";
import { useEffect, useState ,useRef } from "react";



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

    const field=[
        {placeholder:"Employee Name",label:"Employee Name",id:"1",onChange:onEmployeeNameChange,value:employeeName,ref:userRef},
        {placeholder:"Employee ID",label:"Employee ID",id:"2",onChange:onEmployeeIdChange,value:employeeId},
        {placeholder:"Joining Date",label:"Joining Date",id:"3",onChange:onJoiningDateChange,value:joiningDate},
        {placeholder:"Choose Role",label:"Role",Component:CESelect,option0:"Choose Role",option1:"tester",option2:"devops",option3:"junior developer",option4:"senior developer",id:"4",onSelect:onRoleChange,value:role},
        {placeholder:"Choose Status",label:"Status",Component:CESelect,option0:"Choose Status",option1:"active",option2:"inactive",option3:"probation",id:"5",onSelect:onStatusChange,value:status},
        {placeholder:"Experience",label:"Experience",id:"6",onChange:onExperienceChange,value:experience},
        {placeholder:"Address",label:"Address",id:"7",onChange:onAddressChange,value:address}
    ]
    
    return <div>
        
        <main className="CEmain">
            <section>
                <h3 className="create">Create Employee</h3>
            </section>    
            <section className="form">
                <form className="empform" action="">
                    {    
                        field.map((field)=>{
                            return field.Component?
                                <CESelect onSelect={field.onSelect} value={field.value} placeholder={field.placeholder} label={field.label} option0={field.option0} option1={field.option1} option2={field.option2} option3={field.option3} option4={field.option4}/>:
                                <CETextField ref={field.ref} onChange={field.onChange} value={field.value} placeholder={field.placeholder} label={field.label} />
                        })
                    }    
                </form>  
            <CEButton/>   
            </section>   
        </main>        
    </div>         
}

export default CreateEmployee;