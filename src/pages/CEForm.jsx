import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CESelect from "../components/CESelect";
import CEButton from "../components/CEButton";
import CETextField from "../components/CETextField";
import { useDispatch, useSelector } from "react-redux";
import { useAddEmployeeMutation, useGetEmployeeDetailsQuery, useUpdateEmployeeMutation } from "../api/employee.api";

const CEForm = ({ id }) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', joiningDate: '', role: '', department: '', status: '', experience: '', address: '', pincode: '' });
    const userRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [addEmployee] = useAddEmployeeMutation();
    const [updateEmployee] = useUpdateEmployeeMutation();
    const { data: employeeDetails } = useGetEmployeeDetailsQuery(id, { skip: !id });

    useEffect(() => {
        focusInput();
        if (id && employeeDetails) {
            setFormData({
                ...employeeDetails,
                joiningDate:employeeDetails.createdAt.slice(0,10),
                status:employeeDetails.status,
                address: employeeDetails.address?.line1 || '',
                pincode: employeeDetails.address?.pincode || '',
                department: employeeDetails.department?.id || '',
            });
        }
    }, [id, employeeDetails]);

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

    const getRandomStatus = () => {
        const statuses = ["Active", "Inactive", "Probation"];
        return statuses[Math.floor(Math.random() * statuses.length)];
    };
    
    const onButtonClick = async () => {
        try {
            if (id) {
                await updateEmployee({ id, ...formData,
                    // experience: '1',
                    age:20,
                    address: { line1: formData.address, pincode: '2434' },
                    department: { department_id: '2',department_name: 'HR' },
                    
                 }).unwrap();
            } else {
                await addEmployee({
                    ...formData,
                    // status: getRandomStatus(),
                    // experience: '1',
                    age:20,
                    address: { line1: formData.address, pincode: '2434' },
                    department: { id: '2' }
                }).unwrap();
            }
            navigate('/employees/list');
        } catch (error) {
            console.error('Failed to save the employee: ', error);
        }
    };
    

    const field = [
        { name: "name", placeholder: "Employee Name", label: "Employee Name", id: "1", ref: userRef },
        
        { name: "joiningDate", placeholder: "Joining Date", label: "Joining Date", id: "2" },
        { name: "experience", placeholder: "Experience", label: "Experience", id: "5" },
        { name: "role", placeholder: "Choose Role", label: "Role", Component: CESelect, options: ["Choose Role", "UI", "UX", "DEVELOPER", "HR"], id: "8" },
        { name: "status", placeholder: "Choose Status", label: "Status", Component: CESelect, options: ["Choose Status", "Active", "Inactive", "Probation"], id: "4" },
        { name: "address", placeholder: "Address", label: "Address", id: "6" },
        { name: "pincode", placeholder: "Pincode", label: "Pincode", id: "12" },
        { name: "email", placeholder: "Email", label: "Email", id: "10" },
        { name: "password", placeholder: "Password", label: id ? "" : "Password", id: "11", hidden: id },
        { name: "id", placeholder: "Employee ID", label: id ? "Employee ID" : "", id: "7", disabled: !!id, hidden: !id },

    ];

    return (
        <section className="form">
            <form className="empform">
                {field.map((field) => (
                    field.Component ? (
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
                    )
                ))}
            </form>
            <CEButton onButtonClick={onButtonClick} formData={formData} />
        </section>
    );
};

export default CEForm;
