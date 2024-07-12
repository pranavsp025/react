import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import CESelect from "../components/CESelect";
import CEButton from "../components/CEButton";
import CETextField from "../components/CETextField";

const CEForm = (props) => {
    const [formData, setFormData] = useState({employeeName: '',employeeId: '',joiningDate: '',role: '',status: '',experience: '',address: ''});
    const userRef = useRef(null);

    useEffect(() => {
        focusInput();
    }, []);

    const focusInput = () => {
        if (userRef.current) {
            userRef.current.focus();
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    useEffect(()=>{
        if(props.id){
            setFormData(prevState => ({
                ...prevState,
                employeeId: props.id
                
            }));
        }
    })    

    const field = [
        { name: "employeeName", placeholder: "Employee Name", label: "Employee Name", id: "1", ref: userRef },
        { name: "joiningDate", placeholder: "Joining Date", label: "Joining Date", id: "2" },
        { name: "role", placeholder: "Choose Role", label: "Role", Component: CESelect, options: ["Choose Role", "tester", "devops", "junior developer", "senior developer"], id: "3" },
        { name: "status", placeholder: "Choose Status", label: "Status", Component: CESelect, options: ["Choose Status", "active", "inactive", "probation"], id: "4" },
        { name: "experience", placeholder: "Experience", label: "Experience", id: "5" },
        { name: "address", placeholder: "Address", label: "Address", id: "6" },
        { name: "employeeId", placeholder: "Employee ID", label:!props.id? "":"Employee ID", id: "7" , disabled: !!props.id,hidden:!props.id},

    ];
    return (
        <section className="form">
            <form className="empform" action="">
                {field.map((field) => {
                    return field.Component ? (
                        <field.Component
                            key={field.id}
                            onSelect={(e) => handleChange({ target: { name: field.name, value: e.target.value } })}
                            value={formData[field.name]}
                            placeholder={field.placeholder}
                            label={field.label}
                            options={field.options}
                        />
                    ) : (
                        <CETextField
                            key={field.id}
                            ref={field.ref}
                            onChange={handleChange}
                            name={field.name}
                            value={formData[field.name]}
                            placeholder={field.placeholder}
                            label={field.label}
                            disabled={field.disabled}
                            hidden={field.hidden}
                        />
                    );
                })}
            </form>
            <CEButton />
        </section>
    );
};

export default CEForm;
