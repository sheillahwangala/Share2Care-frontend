import React from "react"
import { NavLink } from "react-router-dom";
import { IoIosBulb } from "react-icons/io";
import "./navbar.css"


function Navbar() {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-black px-5 fixed-top">
            <NavLink to='/' className="navbar-brand" > Share2Care <IoIosBulb />  </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <NavLink to='/' className="nav-link">Home <span className="sr-only"></span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/farmproducts' className="nav-link" >Consumer</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/farmers-page' className="nav-link" >Farmer</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/donations' className="nav-link" >Donations</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/signup' className="nav-link">Sign Up</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;