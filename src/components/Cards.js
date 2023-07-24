import React from "react"
import "./Cards.css"
import CardItem from "./CardItem"
import CodeImage from "./images/code_square.png"
import UiImage from "./images/hear_1.png"
import DesignImage from "./images/poster.png"

function Cards() {
    return (
        <div className="cards">
            <h1>This is a test</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                            src={ CodeImage }
                            text="Coding"
                            alt="Coding"
                            path="/projects"
                        />
                        <CardItem
                            src={ UiImage }
                            text="UX/UI"
                            alt="UI Design"
                            path="/projects"
                        />
                        <CardItem
                            src={ DesignImage }
                            text="Graphic Design"
                            alt="Graphic Design"
                            path="/projects"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;