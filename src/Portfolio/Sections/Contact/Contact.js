import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Contact.css';
import ContactForm from './ContactForm';

function Contact(props){
    return(
        <div id="contact-section" className={"portfolio-section " + props.displayClass}> 
            <div className="horizontal-back-home center-content">
                <i className="fas fa-chevron-up back-home-btn" onClick={props.backHome} id="contact"></i>
            </div>          
            <div id="contact-main">           
                <h1 className="main-section-title" id="contact-title"><FormattedMessage id="app.contact.title" defaultMessage="Contact"/></h1>
                <ContactForm/>
            </div>
        </div>
    );
}

export default Contact;