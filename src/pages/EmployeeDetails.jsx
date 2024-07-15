import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import employees from "../components/EmployeeRecords.json"
import { useOutletContext } from "react-router-dom";

const EmployeeDetails = () => {
   
    
    const {state ,dispatch}=useOutletContext();

    const { id } = useParams();
    const employee = state.employees.find((e) => e.id === id);
    let color='#d3f4be'
    if(employee.status=='Probation') color='#f5ecb8'
    else if(employee.status=='Inactive') color='#ffbfbf'
  
    return (
        <div className="CEmain">
            <section className="create top-row">
                <h3>Employee Details</h3>
                <Link to={`/employees/edit/${id}`} className="relative_button_div">
                    <button className="createEmployee_button"><h1 className='CEplus'>+</h1></button>
                    <span className="edit_span">Edit</span>
                </Link>
            </section>
            {employee ? (
                <section className="create details_page">
                    <div className="details_padding_bottom">Employee Name <br /><strong>{employee.name}</strong></div>
                    <div className="details_padding_bottom">Joining Date <br /><strong>{employee.joiningDate}</strong></div>
                    <div className="details_padding_bottom">Experience <br /><strong>{employee.experience}</strong></div>
                    <div className="details_padding_bottom">Role <br /><strong>{employee.role}</strong></div>
                    <div className="details_padding_bottom">Status <br /><strong  className="status_details" style={{backgroundColor:color}}>{employee.status}</strong></div>
                    <hr /><hr /><hr /><hr /><hr />
                    <div className="details_padding_top">Address <br /><strong>{employee.address}</strong></div>
                    <div className="details_padding_top">Employee ID <br /><strong>{employee.id}</strong></div>
                   
                </section>
            ) : (
                <section className="create details_page">
                    <div>No employee found with ID {id}</div>
                </section>
            )}
        </div>
    );
}

export default EmployeeDetails;
