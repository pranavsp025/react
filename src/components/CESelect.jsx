import { forwardRef } from "react";

const CESelect= forwardRef((props,ref) => {
    return(
        <div className="div">
                    <label htmlFor="role" className="n" id="props.id">{props.label}</label><br/>
                    <select ref={ref} onSelect={props.onSelect}  name="" id="" className="in2">
                        <option value="" disabled selected hidden>{props.option0}</option>
                        <option value={props.value}>{props.option1}</option>
                        <option value={props.value}>{props.option2}</option>
                        <option value={props.value}>{props.option3}</option>
                        <option value={props.value}>{props.option4}</option>
                    </select>
                </div>
    )
})

export default CESelect;