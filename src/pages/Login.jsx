import "./Login.scss"
import Logo from "../assets/kv-login.jpeg"
import KvLogo from "../assets/kv-logo.png"
import Button from "../components/Button"
import TextField from "../components/TextField"
import {  useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
const Login = ({handleSubmit}) => {

    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('')
    const [isError,setError]=useState(false)
    const userRef=useRef(null)

    useEffect(()=>{
        focusInput()
    },[])
    
    const focusInput = () => {
        if (userRef.current) {
          userRef.current.focus();
        }
      };

     const onChange = (e) => {
            
                
            if(e.target.value.length>10){
                console.log("error")
                setError(true)  
            }
            else{
                setUserName(e.target.value)
                setError(false)
            }
            
        }
    const onPasswordChange=(e)=>{
        setPassword(e.target.value)
    }
    

  return <main className="loginmain">
    
    {/* {<!-- Hero Section -->} */}
   
        <div className="hero">
            <div className="wrapper-hero">
                <img src={Logo} alt="Login Image" className="login-image"/>
            </div>
        </div>
    {/* {<!-- Login Section -->} */}
        <div className="login">
            <form className="loginform" action="/" method="post">
                <img src={KvLogo} alt="Logo" className="Logo"/>
                <TextField label="Username" ref={userRef} onChange={onChange} type="text" value={userName} isError={isError} placeholder="Username"/>
                <TextField label="Password" type="password" onChange={onPasswordChange} value={password} placeholder="Password"/>
                <Link to='/employees' ><Button text="Login" handleSubmit={handleSubmit}/></Link>
            </form>
        </div>
   

  </main>

}

export default Login;