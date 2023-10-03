import { Link } from "react-router-dom";
function Page404()
{
    return(
        <div>
        <h1>Page not found!</h1>
        <h1>404 Eror!</h1>
        <Link to="/">Go to Home page</Link>
        </div>
    )
}
export default Page404;