import React from 'react';
import './Resume.css';

function Resume(props){
    return(
        <div id="resume-section" className={"portfolio-section " + props.displayClass}>            
            <div className="vertical-back-home center-content">
                <i className="fas fa-chevron-left back-home-btn" onClick={props.backHome} id="resume"></i>
            </div>
            <div id="resume-main">
                <h1>All I did before... not much, I know!</h1>
            </div>
        </div>
    );
}

export default Resume;