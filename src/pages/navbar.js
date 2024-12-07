import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <div className="nav">
            <div className="image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvMYR9SR0gxupa9LY7BFB1mMctNd9g2Pcdg&s" alt=""/>
            </div>
            <ul className="list">
            <li ><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/apply-loan">Apply Loan</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;