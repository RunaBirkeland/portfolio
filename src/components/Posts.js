import React from "react"
import "./Posts.css"
import PostItem from "./PostItem"
import Button from "./Button"
import TestImage from "./images/code_square.png"

function Posts() {
    return (
        <div className="posts">
            <div className="post-container">
                <h1 className="category-header">Interaction Design</h1>
                <ul className="post-items">
                    <li className="post-item">
                        <div className="post-item-wrapper">
                            <PostItem
                                alt="example"
                                src={TestImage}
                                header="Example"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                                alt="example"
                                src={TestImage}
                                header="Example"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            />
                            <div className="button-wrap">
                                <Button
                                    path="/"
                                    title="View Project"
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="post-container">
                <h1 className="category-header">Interaction Design</h1>
                <ul className="post-items">
                    <li className="post-item">
                        <div className="post-item-wrapper">
                            <PostItem
                                alt="example"
                                src={TestImage}
                                header="Example"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                                alt="example"
                                src={TestImage}
                                header="Example"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            />
                            <div className="button-wrap">
                                <Button
                                    path="/"
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