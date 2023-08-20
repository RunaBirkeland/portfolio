import React from "react"
import "./Cards.css"
import CardItem from "./CardItem"
import WebDev from "./images/web_dev.png"
import WebDes from "./images/web_design.png"
import GraphDes from "./images/graphic_design.png"
import UserRes from "./images/user_research.png"

function Cards() {
    return (
        <div className="cards">
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                            src={ WebDev }
                            text="Front-end development"
                            alt="Coding Icon"
                            path="/projects"
                        />
                        <CardItem
                            src={ WebDes }
                            text="UI/UX design"
                            alt="UI Design Icon"
                            path="/projects"
                        />
                        </ul>
                        <ul className="cards_items">
                        <CardItem
                            src={ GraphDes }
                            text="Graphic Design"
                            alt="Graphic Design Icon"
                            path="/projects"
                        />
                        <CardItem
                            src={ UserRes }
                            text="UX Research"
                            alt="User Research Icon"
                            path="/projects"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;