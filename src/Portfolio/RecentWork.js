import React from 'react';
import './RecentWork.css';

function RecentWork(props){
    return(
        <div id="recentWork-section" className={"portfolio-section " + props.displayClass}>                    
            <div id="recentWork-main">
                <h1>Not much in here, I'm a bit lazy!</h1>
            </div>
            <div className="horizontal-back-home center-content">
                <i className="fas fa-chevron-down back-home-btn" onClick={props.backHome} id="recentWork"></i>
            </div>
        </div>
    );
}

export default RecentWork;