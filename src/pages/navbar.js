import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar=()=>{
    const navigate=useNavigate();
    return(
        <div className="nav">
            <div className="image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvMYR9SR0gxupa9LY7BFB1mMctNd9g2Pcdg&s" alt=""/>
            </div>
            <ul className="list">
            <button onClick={()=>navigate("/register")} >Register</button>
            <button onClick={()=>navigate("/login")} >Login</button>
            <button onClick={()=>navigate("/dashboard")} >Dashboard</button>
            <button onClick={()=>navigate("/apply-loan")} >Apply Loan</button>
            </ul>
        </div>
    )
}
export default Navbar;