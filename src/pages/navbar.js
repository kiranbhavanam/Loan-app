import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../utils/image.png"
const Navbar=()=>{
    const navigate=useNavigate();
    return(
        <div className="nav">
            <div className="image">
                <img src={image} alt=""/>
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