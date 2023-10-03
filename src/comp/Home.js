import { useNavigate } from "react-router-dom";
function Home() {
    const navigate=useNavigate();
    return (
        <div>
            <p>Welcome to crush</p>
            <br />
            <button onClick={()=>navigate('/about')}>Go to about page</button>
        </div>
    )

}
export default Home;