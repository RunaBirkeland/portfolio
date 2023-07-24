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
                        to="/"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <AiOutlineLinkedin />
                        <p className="social-label">
                        LinkedIn
                        </p>
                    </Link>
                    <Link 
                        class="social-icon-link" 
                        to="/"
                        target="_blank"
                        aria-label="Mail"
                    >
                        <AiOutlineMail />
                        <p className="social-label">
                        E-Mail
                    </p>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Footer