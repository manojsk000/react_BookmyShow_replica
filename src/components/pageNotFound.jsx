import { Link } from "react-router-dom";
/** type sfc to get the default function syntax. */
const pageNotFound = () => {
    return ( 
        <div className="pnf">
            <h1>404 - Page Not Found</h1>
            <Link to="/">Go Back To Home Page</Link>
        </div>
     );
}
 
export default pageNotFound ;