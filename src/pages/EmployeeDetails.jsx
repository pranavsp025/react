import { useParams, Link } from "react-router-dom";
import { useGetEmployeeDetailsQuery } from "../api/employee.api";
import { useEffect } from "react";

const EmployeeDetails = () => {
    const { id } = useParams();
    const { data } = useGetEmployeeDetailsQuery(id);

    useEffect(() => {
        console.log(data)
    }, [data]);

    let color = '#d3f4be';
    if (data?.status === 'Probation') color = '#f5ecb8';
    else if (data?.status === 'Inactive') color = '#ffbfbf';

    return (
        <div className="CEmain">
            <section className="create top-row">
                <h3>Employee Details</h3>
                <Link to={`/employees/edit/${id}`} className="relative_button_div">
                    <button className="createEmployee_button"><h1 className='CEplus'>+</h1></button>
                    <span className="edit_span">Edit</span>
                </Link>
            </section>
            {data ? (
                <section className="create details_page">
                    <div className="details_padding_bottom">Employee Name <br /><strong>{data.name}</strong></div>
                    <div className="details_padding_bottom">Joining Date <br /><strong>{data.createdAt.slice(0,10)}</strong></div>
                    <div className="details_padding_bottom">Experience <br /><strong>{data.experience}</strong></div>
                    {/* <div className="details_padding_bottom">Updated Date <br /><strong>{data.updatedAt.slice(0,10)}</strong></div> */}

                    <div className="details_padding_bottom">Role <br /><strong>{data.role}</strong></div>
                    {/* <div className="details_padding_bottom">Status <br /><strong className="status_details" style={{ backgroundColor: color }}>{data.deletedAt}</strong></div> */}

                    <div className="details_padding_bottom">Status <br /><strong className="status_details" style={{ backgroundColor: color }}>{data.status}</strong></div>
                    <hr /><hr /><hr /><hr /><hr />
                    <div className="details_padding_top">Address <br /><strong>{data.address.line1}</strong></div>
                    <div className="details_padding_top">Employee ID <br /><strong>{data.id}</strong></div>
                </section>
            ) : (
                <section className="create details_page">
                    <div>No employee found with ID {id}</div>
                </section>
            )}
        </div>
    );
}

export default EmployeeDetails;
