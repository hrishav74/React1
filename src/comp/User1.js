import { useParams } from "react-router-dom";

function User1()
{
    const params=useParams();
    const {name}= params;
    return(
        <div>
        <h1>This is {name}'s Page</h1>
        </div>
    )
}
export default User1;