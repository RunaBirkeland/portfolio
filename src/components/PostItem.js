import React from "react"
import "./Posts.css"

function PostItem(props) {
    return (
        <>
            <div className="post-item">
                <figure className="post-pic-wrapper">
                    <img className="post-img" alt={props.alt} src={props.src} />
                </figure>
                <div classname="post-info-wrapper">
                    <h1 className="post-header">{props.header}</h1>
                    <p className="post-intro">{props.intro}</p>
                    <p className="post-mid">{props.mid}</p>
                    <p className="post-end">{props.end}</p>
                </div>
            </div>
        </>
    )
}

export default PostItem