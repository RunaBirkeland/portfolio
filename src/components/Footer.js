import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-contact">
                <p className="footer-contact-header">
                    Get in touch!
                </p>
                <div class="social-icons">
                    <Link 
                        class="social-icon-link" 
                        to="https://www.linkedin.com/in/runa-birkeland-1108111b9/"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <AiOutlineLinkedin />
                    </Link>
                    <Link 
                        class="social-icon-link" 
                        to="mailto:runa.birkeland@gmail.com"
                        target="_blank"
                        aria-label="Mail"
                    >
                        <AiOutlineMail />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Footer