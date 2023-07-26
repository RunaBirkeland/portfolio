import React from "react"
import "../App.css"
import HeroSection from "../components/HeroSection"
import EducationList from "../components/resumee/EducationList"
import ExperienceList from "../components/resumee/ExperienceList"
import Skills from "../components/resumee/Skills"

export default function About() {
    return (
        <>
            <HeroSection 
                text="A trained interaction designer, blending intuitive design with pleasing aesthetics."
            />
            <div className="resume-container">
                <div className="edu-and-exp">
                    <EducationList />
                    <ExperienceList />
                </div>
                <div className="skills">
                    <Skills />
                </div>
            </div>
        </>
    )
}