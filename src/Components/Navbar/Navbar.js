import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    return (
        <div>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/" exact className="navbar-brand">Accounts App</NavLink>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/add" 
                            className="nav-link">
                                Add Account
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/edit" className="nav-link disabled">
                                Edit Account
                            </NavLink>
                        </li>
                    </ul>
            </div>
        </div>
    );
}

export default Navbar;
