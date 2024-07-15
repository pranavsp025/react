import React from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function DeletePopup() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const handleDelete = () => {
    console.log("Item deleted");
    closeModal();
  };

  return (
    <div>
      <Link onClick={() => setOpen(true)} className='delete'><FaRegTrashCan /> </Link>
      <Popup open={open} closeOnDocumentClick onClose={closeModal} position="right center">
        <div className='DeleteBox'>
          <h2 className='head'>Are you sure ?</h2>
          <button onClick={closeModal} className='close'>X</button>
          <h3 className='description'>Do you really want to delete employee ?</h3>
          <button onClick={handleDelete} className='confirm_button'>Confirm</button>
          <button onClick={closeModal} className='cancel_button'>Cancel</button>
        </div>
      </Popup>
    </div>
  );
}


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
              
              <Link ><DeletePopup/></Link>
              <Link to={`/employees/edit/${employee.id}`} className='edit'><MdOutlineModeEdit /></Link>
              
            </div>
        </Link>
        
    );
};

export default EmployeeRow;
