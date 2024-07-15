import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
const CEButton = ({onButtonClick,formData }) => {
    const handleCreate = () => {
        formData.id=uuidv4().slice(0,10)
        onButtonClick(formData );

        
      };
    

    return(

        <div className="b">
            <Link to='/employees/list'><button className="cr" onClick={handleCreate}>Create</button></Link>
            <Link to='/employees/list'><button className="ca">Cancel</button></Link>
        </div>                  
    )
}
export default CEButton;