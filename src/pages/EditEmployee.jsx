import CEForm from "./CEForm"
import { useParams } from "react-router-dom"

const EditEmployee = () => {
    const {id} = useParams()
    return <div className="CEmain">
        <section>
                <h3 className="create">Edit Employee: {id}</h3>
            </section>
            <CEForm id={id} />
        </div>
}
export default EditEmployee