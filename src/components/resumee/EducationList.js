import React from "react"
import "./List.css"
import ListItem from "./ListItem"

function EducationList() {
    return (
        <>
            <div className="list-wrap">
                <h1 className="list-head">EDUCATION</h1>
                <ul className="list">
                    <ListItem
                        header="Applied Computer Science"
                        date="2019 - 2023"
                        description="Bachelor degree with a specialization in HCI."
                    />
                    <ListItem
                        header="MA Acting"
                        date="2017 - 2018"
                        description="A Master of the Arts degree in Acting."
                    />
                </ul>
            </div>
        </>
    )
}

export default EducationList