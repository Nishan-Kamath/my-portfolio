import React from "react";
import {Link} from "react-router-dom";
import "./App.css";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">nishan</div>
            <ul className="nav-links">
                <li><Link to="/">home</Link></li>
                <li><Link to="/education">education</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;