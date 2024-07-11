import EmployeeRow from "./EmployeeRow";
import { Link } from "react-router-dom";
const Employees = () => {
    return (
        <div className="CEmain">
            <section className="create header-row">
                <h3>Employee List</h3>
                <h4>Filter By</h4>
                <select name="" id=""><option value="">Employee Name</option>
                <option value="">Employee ID</option>
                <option value="">Employee Joining</option>
                <option value="">Role</option>
                <option value="">Experience</option></select>
                <Link to='/employees' className="relative_button_div">
                <button className="createEmployee_button">+</button>
                <span>create Employee</span>
                </Link>
                
            </section>
            <section>
                <div className="head-row header-row">
                    <h5>Employee Name</h5>
                    <h5>Employee ID</h5>
                    <h5>Employee Joining</h5>
                    <h5>Role</h5>
                    <h5>Status</h5>
                    <h5>Experience</h5>
                    <h5>Action</h5>
                </div>
            </section>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>


            
        </div>
    );
};

export default Employees;
