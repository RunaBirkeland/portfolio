import React from "react"
import "./Navbar.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Navbar() {
    return (
         <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="site-title">RB</Link>
                <ul>
                    <CustomLink to="/about">About Me</CustomLink>
                    <CustomLink to="/contact">Contact Me</CustomLink>
                    <CustomLink to="/projects">My Projects</CustomLink>
                </ul>
            </div> 
         </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
             <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Navbar