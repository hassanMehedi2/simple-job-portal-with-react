import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Opps</h2>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;