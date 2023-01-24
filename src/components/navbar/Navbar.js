import React, { useState } from "react"
import { IoIosBulb } from "react-icons/io"
import { FaBars } from "react-icons/fa";
import { ImCross }from "react-icons/im";
import { Link } from "react-router-dom";


function Navbar() {
    const [mobile, setMobile] = useState(false)

    return (
        <nav className="nav__bar">
            <Link to="/" className="nav__logo text-decoration-none text-light">
                <h3 className="nav__logo">Share2Care <IoIosBulb /> </h3>
            </Link>

            <ul
                className={mobile ? "nav__links__mobile" : "nav__links"}
                onClick={() => setMobile(false)}
            >
                <Link to="/" className="text-decoration-none">
                    <li>Home</li>
                </Link>
                <Link to="/products" className="text-decoration-none">
                    <li>Products</li>
                </Link>
                <Link to="/donations" className="text-decoration-none">
                    <li>Donations</li>
                </Link>
                <Link to="/" className="text-decoration-none">
                    <li>Get Started</li>
                </Link>
            </ul>
            <button className="mobile__menu__icon" onClick={() => setMobile(!mobile)}>
                {mobile ? <ImCross /> : <FaBars />}
            </button>
        </nav>
    )
}
export default Navbar;