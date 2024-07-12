import { forwardRef } from "react";

const CESelect = forwardRef((props, ref) => {
    return (
        <div className="div">
            <label htmlFor={props.name} className="n" id={props.id}>{props.label}</label><br/>
            <select 
                ref={ref} 
                name={props.name} 
                value={props.value} 
                onChange={props.onSelect} 
                className="in2"
            >
                <option value="" disabled hidden>{props.placeholder}</option>
                {props.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
});

export default CESelect;
