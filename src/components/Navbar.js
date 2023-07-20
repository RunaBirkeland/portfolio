import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { NavLink } from "react-router-dom"
import logo from "./monogram_purple.png"

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <IconContext.Provider value={{ color: "#160624" }}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <img src={logo} width={40} height={30} alt="logo"/>
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink to="/about" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                                    onClick={closeMobileMenu}>About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projects" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                                    onClick={closeMobileMenu}>My Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                                    onClick={closeMobileMenu}>Get In Touch</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar