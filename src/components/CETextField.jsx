import { forwardRef, useEffect } from "react";
import { useParams } from "react-router-dom";


const CETextField = forwardRef((props, ref) => {
    const {empid} = useParams()
    useEffect

    return (
        <div className="div">
            <label htmlFor={props.name} className="n" id={props.id}>{props.label}</label><br/>
            <input
                ref={ref}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                type="text"
                placeholder={props.placeholder}
                className="in"
                disabled={props.disabled}
                hidden={props.hidden}
            />
        </div>
    );
});

export default CETextField;
