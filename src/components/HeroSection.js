import React from "react"
import "./HeroSection.css"

function HeroSection (props) {
    return (
        <div className="hero-container">
            <p>{props.text}</p>
        </div>
    )
}

export default HeroSection