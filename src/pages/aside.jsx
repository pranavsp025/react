import icon from "../assets/icon.svg";
import "./CreateEmployee.scss"
import { Link } from "react-router-dom";
const Aside =() => {
    return <aside>
            <nav>
                <img src={icon} class="ico" srcset=""/>
                <Link to ="/employees/list" className="employee_list_a">Employee List</Link>
                <Link to ="/employees" className="employee_create_a">Employee Create</Link>
                <Link to ="/" className="logout_a" onClick={()=>{localStorage.setItem('token',false),localStorage.clear}}>Logout</Link>


            </nav>
        </aside>  
}
export default Aside