import React from 'react';
import './About.css';

function About(props){
    return(
        <div id="about-section" className={"portfolio-section " + props.displayClass}>
            <div id="about-main">
                <h1>It's all about us!</h1>
            </div>
            <div className="vertical-back-home center-content">
                <i className="fas fa-chevron-right back-home-btn" onClick={props.backHome} id="about"></i>
            </div>
        </div>
    );
}

export default About;