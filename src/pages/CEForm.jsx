import { useState, useRef, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import CESelect from "../components/CESelect";
import CEButton from "../components/CEButton";
import CETextField from "../components/CETextField";
import { actionTypes } from "../useReducer";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, updateEmployee } from "../store/employeeReducer";



const CEForm = (props) => {
    const [formData, setFormData] = useState({ name: '', id: '', joiningDate: '', role: '', status: '', experience: '', address: '' });
    const userRef = useRef(null);
    // const { state, dispatch } = useOutletContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const employees = useSelector((state)=> state.employees.employees)


    
    useEffect(() => {
        focusInput();
        if (props.id) {
            const employee = employees.find((e) => e.id === props.id);
            if (employee) {
                setFormData(employee);
            }
        }
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

    const onButtonClick = () => {
        if (props.id) {
            dispatch(updateEmployee(formData))
        } else {
            dispatch(addEmployee(formData))

        }
        navigate('/');
    };

    const field = [
        { name: "name", placeholder: "Employee Name", label: "Employee Name", id: "1", ref: userRef },
        { name: "joiningDate", placeholder: "Joining Date", label: "Joining Date", id: "2" },
        { name: "experience", placeholder: "Experience", label: "Experience", id: "5" },
        { name: "department", placeholder: "Choose Department", label: "Department", Component: CESelect, options: ["Choose Department", "HR", "Development", "Designer"], id: "3" },
        { name: "role", placeholder: "Choose Role", label: "Role", Component: CESelect, options: ["Choose Role", "tester", "devops", "junior developer", "senior developer"], id: "8" },
        { name: "status", placeholder: "Choose Status", label: "Status", Component: CESelect, options: ["Choose Status", "Active", "Inactive", "Probation"], id: "4" },
        { name: "address", placeholder: "Address", label: "Address", id: "6" },
        { name: "id", placeholder: "Employee ID", label: props.id ? "Employee ID" : "", id: "7", disabled: !!props.id, hidden: !props.id },
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
            <CEButton onButtonClick={onButtonClick} formData={formData} />
        </section>
    );
};

export default CEForm;
