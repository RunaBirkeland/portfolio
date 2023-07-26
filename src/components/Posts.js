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
                                text="This is a prototype which was created as part of my bachelor thesis.
                                During the project my partner and I collaborated with a start-up called Woid AS,
                                a company which is developing an assistive technology application. The project
                                involved a comprehensive redesign of the application (h)ear. 
                                The color palette, icon design, illustrations, and 
                                walkthrough were solely developed by me, while the remaining 
                                aspects were the result of collaborative efforts with my 
                                partner, where we both contributed equally to the overall 
                                design. The button leads to the Figma file."
                            />
                            <div className="button-wrap">
                                <Button
                                    path="https://www.figma.com/proto/MnFtHJYshlSGM9d9IyTS0O/(h)ear-suggestions-for-new-prototype?node-id=101-2318&starting-point-node-id=101%3A2318&mode=design&t=riup3pMKbXRZDIgk-1"
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
                                text="This website was a group project conducted 
                                during the autumn of 2020 as part of the course 
                                'Web Development and Inclusive Design.' 
                                The assignment was to create a website for our own innovative product, 
                                and our innovative product of choice was a travel application 
                                which we named Greentrotter. The entire visual expression of 
                                the website is my work, as well as some of the code.
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
                                text="I created this website in order to provide myself 
                                with an easily accessible and professional portfolio, 
                                it also gave me the opportunity to teach myself React JS. 
                                As this website will be a constant work-in-progress 
                                it is subject to continual change and development, 
                                both for the benfit of the users as well as for my own 
                                personal development. Apart from the icons used for the responsive 
                                menu and the Footer, all the graphics and icons are 
                                made by yours truly. 
                                The website is developed using and hosted by GitHub, 
                                so the button below will lead to the GitHub project."
                            />
                            <div className="button-wrap">
                                <Button
                                    path="/"
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
                                text="A short-term internship in early 2021 with the start-up ChargeBnB
                                culminated in a Figma prototype for a desktop application which 
                                had the goal of making the administration of multiple EV chargers
                                easier for ChargeBnB customers. This was a group project so only the
                                main parts of the 'Dashboard' and 'My users', as well as parts of 
                                'My chargers', may be attributed to me. The link leads to the Figma file."
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
                                text="Part of an exam assignment, this prototype is the 
                                continuation of the application presented through the 
                                Greentrotter Website. In order not to plagiarise myself it was
                                re-imagined slightly, as well as given a new name. The design 
                                is highly influenced by visualisation techniques presented by
                                the great Don Norman, and engineer Robert Spence."
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