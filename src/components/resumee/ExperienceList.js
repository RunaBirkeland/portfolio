import React from "react"
import "./List.css"
import ListItem from "./ListItem"

function ExperienceList () {
    return (
        <div className="list-wrap">
            <h1 className="list-head">EXPERIENCE</h1>
            <ul className="list">
                <ListItem 
                    header="Teacher's Assistant"
                    date="2021 - 2023"
                    description="TA in subjects like Prototyping and Interaction Design, Visualization and Web Development."
                />
                <ListItem 
                    header="Intern"
                    date="2023"
                    description="A short-term internship, as part of the bachelor thesis, with a newly founded start-up developing assistive technology."
                />
            </ul>
        </div>
    )
}

export default ExperienceList