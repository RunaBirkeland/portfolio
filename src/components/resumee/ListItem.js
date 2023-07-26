import React from "react"
import "./List.css"

function ListItem (props) {
    return (
        <>
            <li className="list-item">
                <div className="list-item-container">
                    <div className="list-item-head-wrap">
                        <h1 className="title">{props.header}</h1>
                        <h2 className="date">{props.date}</h2>
                    </div>
                    <p className="description">{props.description}</p>
                </div>
            </li>
        </>
    )
}

export default ListItem