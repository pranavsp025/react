import React, { useEffect, useState } from 'react';
import EmployeeRow from "./EmployeeRow";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { actionTypes } from '../useReducer';

const Employees = () => {
    const [deleteId, toggleDelete] = useState('') 
    const navigate = useNavigate()
    const {state ,dispatch}=useOutletContext();
    // console.log("State",JSON.stringify(state))

    const onButtonClick = (id) => {
        dispatch({
            type: actionTypes.DELETE_EMPLOYEE,
            payload: id
        });
        toggleDelete('');
    };
    

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
            {state.employees.map((employee, index) => (
                <EmployeeRow key={index} employee={employee} onButtonClick={onButtonClick}/>))}
        </div>
    );
};

export default Employees;
