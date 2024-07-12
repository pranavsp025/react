import { forwardRef } from "react";

const CETextField = forwardRef((props, ref) => {
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
            />
        </div>
    );
});

export default CETextField;
