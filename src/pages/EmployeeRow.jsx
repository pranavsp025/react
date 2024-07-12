import React from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
const EmployeeRow = ({ employee }) => {
  let color='#d3f4be'
  if(employee.status=='Probation') color='#f5ecb8'
  else if(employee.status=='Inactive') color='#ffbfbf'

    return ( 
        <Link to={`/employees/details/${employee.id}`} className='detailsFetch row header-row'>

            <div>{employee.name}</div>
            <div>{employee.id}</div>
            <div>{employee.joiningDate}</div>
            <div>{employee.role}</div>
            <div className='status_style' style={{backgroundColor:color}}>{employee.status}</div>
            <div>{employee.experience}</div>
            <div>
              <Link className='delete'><FaRegTrashCan /></Link>
              <Link to={`/employees/edit/${employee.id}`} className='edit'><MdOutlineModeEdit /></Link>
              
            </div>
        </Link>
        
    );
};

export default EmployeeRow;
