import React from "react"
import "./Button.css"
import { Link } from "react-router-dom"

function Button(props, type, onClick) {
    return (
        <Link to={props.path} target="_blank" className="btn-mobile">
            <button className="btn"
                onClick={onClick}
                type={type}>
                {props.title}
            </button>
        </Link>
    )
}

export default Button