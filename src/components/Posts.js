import React from "react"
import "./Posts.css"
import PostItem from "./PostItem"
import Button from "./Button"
import Logo from "./images/monogram_coal.png"
import Greentrotter from "./images/greentrotter_logo.png"
import Hermes from "./images/hermes.png"
import ChargeBnB from "./images/chargebnb.png"
import Hear from "./images/logo_hear.png"
import HeroSection from "./HeroSection"

function Posts() {
    return (
        <div className="posts">
            <HeroSection
                text="A selection of websites and prototypes. Designed and coded by me."
            />
            <div className="post-container">
                <ul className="post-items">
                    <li className="post-item">
                        <div className="post-item-wrapper">
                            <PostItem
                                alt="(H)ear Logo"
                                src={Hear}
                                header="(H)ear Redesign"
                                intro="Woid AS is a startup developing an assistive technology mobile application called (h)ear. 
                                Their goal is to make the lives of hearing aid users more convenient by creating an aid which will 
                                make communicating with their colleagues, friends and loved ones easier. 
                                For our bachelor thesis my group and I collaborated with Woid AS to improve the usability of their product."
                                mid="The project involved planning and completing usability tests of the app with Woid's target audience, 
                                hearing aid users, as well as proposing improvements to the design of the app. The usability tests were conducted 
                                in a lab environment and included a classic Think Aloud usability test, a Likert Scale survey and an in-depth interview. 
                                After completing the usability tests, the data was collected, categorized and sorted in order to give a clearer 
                                indication of the challenges the users faced. This information was then gathered in a report and utilized to create 
                                a redesign proposal in Figma."
                                end="In the finished product the colour palette, icon design, illustrations, and 
                                walkthrough are designed solely by me, while the remaining 
                                aspects were the results of a collaborative effort. The button below leads to the Figma file."
                            />
                            <div className="button-wrap">
                                <Button
                                    path="https://www.figma.com/proto/lunQwr5uEzrdFuUbtfymFU/(h)ear-suggestions-for-new-prototype-(Copy)?type=design&node-id=101-2318&t=3ophLmzzbfM3sgsI-1&scaling=scale-down&page-id=101%3A2034&starting-point-node-id=101%3A2318&mode=design"
                                    title="View Project"
                                />
                            </div>
                        </div>
                    </li>
                    <li className="post-item">
                        <div className="post-item-wrapper">
                            <PostItem
                                alt="Greentrotter Logo"
                                src={Greentrotter}
                                header="Greentrotter Website"
                                intro="In the autumn of 2020 the exam in the course 'Web Development and Inclusive Design' 
                                called for the creation of a website that would present an innovative product. 
                                It was a group assignment, and my group of four decided to present my idea of an environmentally 
                                friendly travel app, 'Greentrotter'."
                                mid="The process of developing the website was a collaboration based on a common backlog of tasks 
                                and regular work sessions and meetings."
                                end="My contribution to the project lies in the visual expression of 
                                the website, the colour palette, logo and images, as well as in some of the code.
                                The button will lead to the website which is hosted on
                                GitHub Pages."
                            />
                            <div className="button-wrap">
                                <Button
                                    path="https://group3-dafe1200.github.io/Final_Exam/index.html"
                                    title="View Project"
                                />
                            </div>
                        </div>
                    </li>
                    <li className="post-item">
                        <div className="post-item-wrapper">
                            <PostItem
                                alt="Logo"
                                src={Logo}
                                header="Portfolio Website"
                                intro="I created this website in order to provide myself 
                                with an easily accessible and professional portfolio, 
                                it also gave me the opportunity to teach myself React.js."
                                mid="It started out with a rough idea of what I wanted it to 
                                look like and a deadline. It came together while I 
                                taught myself React.js through the aid of videos and websites, 
                                in addition to a great amount of trial and error."
                                end="As this website will be a constant work-in-progress 
                                it is subject to continual change and development, 
                                both for the benfit of the users as well as for my own 
                                personal development. Apart from the icons used for the responsive 
                                menu and the Footer, all the graphics and icons are 
                                made by yours truly. The button below will lead to the GitHub project."
                            />
                            <div className="button-wrap">
                                <Button
                                    path="https://github.com/RunaBirkeland/portfolio"
                                    title="View Project"
                                />
                            </div>
                        </div>
                    </li>
                    <li className="post-item">
                        <div className="post-item-wrapper">
                            <PostItem
                                alt="ChargeBnB Icon"
                                src={ChargeBnB}
                                header="ChargeBnB Desktop Application"
                                intro="In early 2021 I completed a short-term internship with the start-up ChargeBnB. 
                                ChargeBnB is a startup working to create an ecosystem for EV charger sharing. The task 
                                given to the interns was to prototype and test a desktop application for charger administration."
                                mid="After going through ChargeBnB's own research as well as conversations with the founders 
                                the project's supervisor, the group threw together a low-fidelity prototype and planned the 
                                first usability test. In total the prototype went through three rounds of usability tests 
                                and was subjected to improvement and further development after each round of tests, culimating 
                                in a mid-fidelity prototype."
                                end="As it was a group project only the main parts of the 'Dashboard' and 'My users', as well as 
                                some parts of 'My chargers', may be attributed to me. The button below leads to the Figma file."
                            />
                            <div className="button-wrap">
                                <Button
                                    path="https://www.figma.com/proto/tGtQvcXzU9XjD4QtMqWmnz/ChargeBnB_Web_Application(Copy)?node-i d=1%3A7019&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A164"
                                    title="View Project"
                                />
                            </div>
                        </div>
                    </li>
                    <li className="post-item">
                        <div className="post-item-wrapper">
                            <PostItem
                                alt="Hermes logo"
                                src={Hermes}
                                header="Hermes Mobile Application"
                                intro="An exam during the spring of 2021 saw the revival of my idea 
                                for an environmentally friendly travel app, Greentrotter. The assignment, 
                                which was for the course Visualization, was to design a product using 
                                visualization techniques. I wished to develop Greentrotter further, 
                                but in order not to plagiarise myself it was re-imagined slightly 
                                and given a new name. The goal was to use visualization techniques to 
                                encourage users to travel greener."
                                mid="The process consisted of creating rough sketches, reading about 
                                different visualization techniques, choosing the techniques 
                                most likely to affect the user in the desired way, 
                                creating several prototypes, testing and improving the prototypes, 
                                before finally having to land on a design to deliver for the exam."
                                end="The final design is highly influenced by visualisation techniques presented by
                                the great Don Norman, and engineer Robert Spence. Everything is created by me, 
                                bar the screenshots from Google Maps and the stock photos of the locations."
                            />
                            <div className="button-wrap">
                                <Button
                                    path="https://xd.adobe.com/view/005c8c3c-923c-4a85-b33a-493167a9249d-550f/"
                                    title="View Project"
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Posts