import { Link } from "react-router-dom"
const NotFound = () => {
    return <main>
        <h3>Page not found</h3>
        <Link to ="/" replace>Go back home</Link>
    </main>
}

export default NotFound