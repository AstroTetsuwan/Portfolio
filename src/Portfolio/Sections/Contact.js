import React from 'react';
import './Contact.css';

function Contact(props){
    return(
        <div id="contact-section" className={"portfolio-section " + props.displayClass}> 
            <div className="horizontal-back-home center-content">
                <i className="fas fa-chevron-up back-home-btn" onClick={props.backHome} id="contact"></i>
            </div>          
            <div id="contact-main">
                <h1>A question ? A job for me ? A date ? (You're buying!) Contact me !</h1>
            </div>
        </div>
    );
}

export default Contact;