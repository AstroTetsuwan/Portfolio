import React from 'react';
import { FormattedMessage } from 'react-intl';
import './RecentWork.css';
import ljmScreenShot from './ljm.png';
import RecentWorkElement from './RecentWorkElement';

function RecentWork(props){

    const projects = [
        {title: "Lily Jane Music", img: ljmScreenShot, comment: "app.recent-work.comment.ljm", link:"http://lilyjanemusic.000webhostapp.com/"},
        {title: "Lily Jane Music", img: ljmScreenShot, comment: "app.recent-work.comment.ljm", link:"http://lilyjanemusic.000webhostapp.com/"},
        {title: "Lily Jane Music", img: ljmScreenShot, comment: "app.recent-work.comment.ljm", link:"http://lilyjanemusic.000webhostapp.com/"},
        {title: "Lily Jane Music", img: ljmScreenShot, comment: "app.recent-work.comment.ljm", link:"http://lilyjanemusic.000webhostapp.com/"}
    ];

    return(
        <div id="recentWork-section" className={"portfolio-section " + props.displayClass}>                    
            <div className="horizontal-main-section">
                <h1 className="main-section-title"><FormattedMessage id="app.recent-work.title" defaultMessage="Recent Work"/></h1>
                <div id="projects-wrapper">
                    {projects.map((project, i) => <RecentWorkElement project={project} key={i}/>)}
                </div>
            </div>
            <div className="horizontal-back-home center-content">
                <i className="fas fa-chevron-down back-home-btn" onClick={props.backHome} id="recentWork"></i>
            </div>
        </div>
    );
}

export default RecentWork;