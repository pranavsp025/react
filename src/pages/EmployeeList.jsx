import EmployeeRow from "./EmployeeRow";

const Employees = () => {
    return (
        <div className="CEmain">
            <section>
                <h3 className="create">Employee List</h3>
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
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>
            <EmployeeRow/>


            
        </div>
    );
};

export default Employees;
