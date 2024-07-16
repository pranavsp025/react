import React, { useEffect, useState } from 'react';
import EmployeeRow from "./EmployeeRow";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { actionTypes } from '../useReducer';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee } from '../store/employeeReducer';
import { useGetEmployeeListQuery } from '../api/employee.api';

const Employees = () => {
    const [deleteId, toggleDelete] = useState('') 
    const navigate = useNavigate()
    // const {state ,dispatch}=useOutletContext();
    const [filter, setFilter] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    // console.log("State",JSON.stringify(state))
    // const employees = useSelector((state)=> state.employees.employees)
    const [list,setList] = useState([])
    const dispatch = useDispatch();
    const { data = [] } = useGetEmployeeListQuery();

    useEffect(()=>{
        const employees = data.map((employee)=>({
        ...employee,
        joiningDate: new Date(employee.createdAt).toLocaleDateString("en-GB",{
            day:"numeric",
            month:"short",
            year:"numeric",
        })
    }))
    setList(employees)
    },[data])
    
    

    const onButtonClick = (id) => {
        dispatch(deleteEmployee(id))
        toggleDelete('');
    };
    
    // useEffect(()=>{
    //     console.log({employees})
    // },[employees])

    return (
        <div className="CEmain">
            <section className="create top-row">
                <h3>Employee List</h3>
                <h4>Filter By</h4>
                <select name="" id=""  >
                    <option value="Employee Name">Employee Name</option>
                    <option value="Employee ID">Employee ID</option>
                    <option value="Employee Joining">Employee Joining</option>
                    <option value="Role">Role</option>
                    <option value="Status">Status</option>
                    <option value="Experience">Experience</option>
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
            {list.map((employee, index) => (
                <EmployeeRow key={employee.id} employee={employee} onButtonClick={onButtonClick}/>))}
            
        </div>
    );
};

export default Employees;

