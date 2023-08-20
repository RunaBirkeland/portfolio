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
                        date="2020 - 2023"
                        description="Bachelor degree with a specialization in both UX/UI design and Frontend development. Graduated with an average grade of A."
                    />
                    <ListItem
                        header="MA Acting"
                        date="2017 - 2018"
                        description="Master of the Arts degree in acting."
                    />
                    <ListItem
                        header="BA Musical Theatre"
                        date="2013 - 2017"
                        description="Bachelor of the Arts degree in acting, dancing and singing."
                    />
                </ul>
            </div>
        </>
    )
}

export default EducationList