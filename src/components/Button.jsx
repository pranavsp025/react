import React from "react";
const Button = ({text,handleSubmit}) => {
    return(

        <button className="loginbutton" type="submit" data-testid="button-test-id" >{text}</button>
    )
}
export default Button;