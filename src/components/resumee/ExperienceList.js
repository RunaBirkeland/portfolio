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
                    description="TA in the subjects Interaction Design and Prototyping, Web Development, and Visualization. Planning and conducting lectures, assisting the lecturer with classes and grading assignments, as well as guiding and assisting students."
                />
                <ListItem 
                    header="UX/UI Intern"
                    date="2023"
                    description="Internship at a startup in connection with the bachelor’s thesis. Conducted user testing on a mobile app and redesigned the application based on the collected data."
                />
                <ListItem 
                    header="UX Intern"
                    date="2022"
                    description="Internship at a startup. Created and tested a prototype of a desktop app for managing electric vehicle chargers."
                />
                <ListItem 
                    header="Various"
                    date=""
                    description="I've also produced, starred in and help set up multiple theatre productions and short films, worked as a bar manager in London, UK, and worked in the charitable organization 'Future in our Hands'."
                />
            </ul>
        </div>
    )
}

export default ExperienceList