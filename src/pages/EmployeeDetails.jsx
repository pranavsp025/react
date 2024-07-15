import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EmployeeDetails = () => {
   
    const employees = [
        { name: "John Doe", id: "E001", joiningDate: "2020-01-15", role: "Developer", status: "Active", experience: "3 years" ,address:"123 Maple Street" },
        { name: "Jane Smith", id: "E002", joiningDate: "2019-03-22", role: "Designer", status: "Probation", experience: "4 years" ,address:"456 Oak Avenue" },
        { name: "Jim Brown", id: "E003", joiningDate: "2018-07-12", role: "Manager", status: "Inactive", experience: "6 years" ,address:"789 Pine Road"},
        { name: "Lucy Black", id: "E004", joiningDate: "2021-11-01", role: "Tester", status: "Active", experience: "2 years" ,address:"101 Birch Lane"},
        { name: "Tom White", id: "E005", joiningDate: "2017-09-30", role: "Developer", status: "Inactive", experience: "5 years" ,address:"202 Cedar Street"},
        { name: "Anna Blue", id: "E006", joiningDate: "2022-05-19", role: "HR", status: "Probation", experience: "1 year" ,address:"303 Spruce Boulevard"},
        { name: "Mark Green", id: "E007", joiningDate: "2016-12-10", role: "Developer", status: "Active", experience: "7 years" ,address:"404 Elm Court"},
        { name: "Sara Grey", id: "E008", joiningDate: "2020-08-25", role: "Designer", status: "Inactive", experience: "3 years" ,address:"505 Willow Drive"},
        { name: "Paul Yellow", id: "E009", joiningDate: "2019-02-14", role: "Manager", status: "Probation", experience: "5 years" ,address:"606 Redwood Avenue"},
        { name: "Diana Red", id: "E010", joiningDate: "2018-11-05", role: "Tester", status: "Inactive", experience: "6 years" ,address:"707 Chestnut Street"},
        { name: "Chris Purple", id: "E011", joiningDate: "2021-01-29", role: "HR", status: "Active", experience: "2 years" ,address:"808 Magnolia Way"},
        { name: "Megan Brown", id: "E012", joiningDate: "2017-07-18", role: "Developer", status: "Active", experience: "5 years" ,address:"909 Ash Lane"},
        { name: "Frank Silver", id: "E013", joiningDate: "2022-09-03", role: "Tester", status: "Inactive", experience: "1 year" ,address:"1010 Cypress Boulevard"},
    ];
    
    const { id } = useParams();
    const employee = employees.find((e) => e.id === id);
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
                    <div className="details_padding_bottom status_details" style={{backgroundColor:color}}>Status <br /><strong>{employee.status}</strong></div>
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
