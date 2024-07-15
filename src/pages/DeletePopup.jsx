import React, { useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function DeletePopup({ onButtonClick, employeeId }) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const handleDelete = () => {
    onButtonClick(employeeId);
    closeModal();
  };

  return (
    <div>
      <Link onClick={() => setOpen(true)} className='delete'><FaRegTrashCan /> </Link>
      <Popup open={open} closeOnDocumentClick onClose={closeModal} position="right center">
        <div className='DeleteBox'>
          <h2 className='head'>Are you sure?</h2>
          <button onClick={closeModal} className='close'>X</button>
          <h3 className='description'>Do you really want to delete this employee?</h3>
          <button onClick={handleDelete} className='confirm_button'>Confirm</button>
          <button onClick={closeModal} className='cancel_button'>Cancel</button>
        </div>
      </Popup>
    </div>
  );
}

export default DeletePopup;
