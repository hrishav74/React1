import { NavLink } from "react-router-dom";
function About()
{
    return (
        <div>
    <p>Hello from crush</p>
    <button><NavLink to='/User1/hrishav'>hrishav</NavLink></button><br/>
        <button><NavLink to='/User1/crush'>crush</NavLink></button>
    </div>
    )

}
export default About;