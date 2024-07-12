import React, { useEffect } from 'react';
import EmployeeRow from "./EmployeeRow";
import { Link } from "react-router-dom";

const Employees = () => {
    
    const employees = [
        { name: "John Doe", id: "E001", joiningDate: "2020-01-15", role: "Developer", status: "Active", experience: "3 years" },
        { name: "Jane Smith", id: "E002", joiningDate: "2019-03-22", role: "Designer", status: "Probation", experience: "4 years" },
        { name: "Jim Brown", id: "E003", joiningDate: "2018-07-12", role: "Manager", status: "Inactive", experience: "6 years" },
        { name: "Lucy Black", id: "E004", joiningDate: "2021-11-01", role: "Tester", status: "Active", experience: "2 years" },
        { name: "Tom White", id: "E005", joiningDate: "2017-09-30", role: "Developer", status: "Inactive", experience: "5 years" },
        { name: "Anna Blue", id: "E006", joiningDate: "2022-05-19", role: "HR", status: "Probation", experience: "1 year" },
        { name: "Mark Green", id: "E007", joiningDate: "2016-12-10", role: "Developer", status: "Active", experience: "7 years" },
        { name: "Sara Grey", id: "E008", joiningDate: "2020-08-25", role: "Designer", status: "Inactive", experience: "3 years" },
        { name: "Paul Yellow", id: "E009", joiningDate: "2019-02-14", role: "Manager", status: "Probation", experience: "5 years" },
        { name: "Diana Red", id: "E010", joiningDate: "2018-11-05", role: "Tester", status: "Inactive", experience: "6 years" },
        { name: "Chris Purple", id: "E011", joiningDate: "2021-01-29", role: "HR", status: "Active", experience: "2 years" },
        { name: "Megan Brown", id: "E012", joiningDate: "2017-07-18", role: "Developer", status: "Active", experience: "5 years" },
        { name: "Frank Silver", id: "E013", joiningDate: "2022-09-03", role: "Tester", status: "Inactive", experience: "1 year" },
        
    ];
    

    return (
        <div className="CEmain">
            <section className="create top-row">
                <h3>Employee List</h3>
                <h4>Filter By</h4>
                <select name="" id="">
                    <option value="">Employee Name</option>
                    <option value="">Employee ID</option>
                    <option value="">Employee Joining</option>
                    <option value="">Role</option>
                    <option value="">Status</option>
                    <option value="">Experience</option>
                </select>
                <Link to='/employees' className="relative_button_div">
                    <button className="createEmployee_button"><h1 className='CEplus'>+</h1></button>
                    <span className='CEspan'>Create Employee</span>
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
            {employees.map((employee, index) => (
                <EmployeeRow key={index} employee={employee} />
            ))}
        </div>
    );
};

export default Employees;
