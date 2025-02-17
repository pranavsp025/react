import React, { useEffect, useState } from 'react';
import EmployeeRow from "./EmployeeRow";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useDeleteEmployeeMutation, useGetEmployeeListQuery } from '../api/employee.api';

const Employees = () => {
    const [deleteId, toggleDelete] = useState(''); 
    const navigate = useNavigate();
    const [filter, setFilter] = useState('Employee ID');
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [list, setList] = useState([]);
    const dispatch = useDispatch();
    const { data = [] } = useGetEmployeeListQuery();
    const [deleteEmployee] = useDeleteEmployeeMutation();

    useEffect(() => {
        const employees = data.map((employee) => ({
            ...employee,
            joiningDate: new Date(employee.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
            })
        }));
        setList(employees);
    }, [data]);

    useEffect(() => {
        let sortedList = [...list];
        switch (filter) {
            case 'Employee ID':
                sortedList.sort((a, b) => a.id - b.id);
                break;
            case 'Employee Name':
                sortedList.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'Employee Joining':
                sortedList.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                break;
            case 'Role':
                sortedList.sort((a, b) => a.role.localeCompare(b.role));
                break;
            case 'Status':
                sortedList.sort((a, b) => a.status.localeCompare(b.status));
                break;
            case 'Experience':
                sortedList.sort((a, b) => a.experience - b.experience);
                break;
            default:
                break;
        }
        setFilteredEmployees(sortedList);
    }, [filter, list]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const onButtonClick = async (id) => {
        try {
            await deleteEmployee(id).unwrap();
            toggleDelete('');
        } catch (error) {
            console.error('Failed to delete the employee: ', error);
        }
    };

    return (
        <div className="CEmain">
            <section className="create top-row">
                <h3>Employee List</h3>
                <h4>Filter By</h4>
                <select name="" id="" value={filter} onChange={handleFilterChange}>
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
            {filteredEmployees.map((employee) => (
                <EmployeeRow key={employee.id} employee={employee} onButtonClick={onButtonClick} />
            ))}
        </div>
    );
};

export default Employees;
