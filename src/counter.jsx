import { useEffect, useState, useRef } from "react";
    const Counter = () => {
        const [state,setState] = useState(0)
        // const [state1,setState1] = useState(0)
        useEffect(()=>{
            console.log(state);
            // console.log(state1);

            return()=>{
                console.log(state);
                // console.log(state1);

            };
        const colorchange=()=>{
            if (state%2===0){color:red}
            else {color:blue}
        }
        },[state])

        const counterRef=useRef(0);
        useEffect(()=>{
            console.log("component re-rendered");
        },[counterRef])
        return <div>
            <h1>{state}</h1>
            <button className="loginbutton" onClick={()=>setState(state+1)} >+</button>
            <button className="loginbutton" onClick={()=>setState(state-1)}>-</button>
            {/* <h1>{state1}</h1>
            <button className="loginbutton" onClick={()=>setState1(state1+1)}>+</button>
            <button className="loginbutton" onClick={()=>setState1(state1-1)}>-</button> */}
            <span>{counterRef.current}</span>
            <button onClick={()=>{counterRef.current+=1
                            console.log(counterRef.current)}}>click</button>

                
        </div>
    }
    export default Counter;