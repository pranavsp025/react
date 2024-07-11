const Button = ({text,handleSubmit}) => {
    return(

        <button className="loginbutton" type="submit" onClick={()=>{localStorage.setItem('token',true)}}>{text}</button>
    )
}
export default Button;