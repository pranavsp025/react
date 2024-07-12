import React from 'react'
 import { Link } from 'react-router-dom';
const DeleteConfirmation = () => {
    return <div className='deleteMain'>
      <section>
        <h2>Are You Sure?</h2>
        <h1>Do you really want to delete employee?</h1>
        <Link><button>X</button></Link>
        <Link><button>Confirm</button></Link>
        <Link><button>Cancel</button></Link>
      </section>
    </div>
}
 
export default DeleteConfirmation;