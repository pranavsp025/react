import { forwardRef, useEffect, useState } from "react";

const TextField = forwardRef((props,ref) => {
    
    const [text,setText]=useState('')

    // useEffect(()=>{
    //     if(text.length>10){
    //         console.log("error")
    //         isError(true)
    //     }
    // },[text,isError])

    return(
        <span>
            <label htmlFor="uname" >{props.label}</label>
            <input ref={ref} type={props.type} value={props.value} onChange={props.onChange}  style={{borderColor:props.isError ? 'Red':'#03aeee'}} placeholder={props.placeholder}/>
        </span>
    )
})

export default TextField;