import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Home.css';

function Home(props){
    
    return(
        <div id="home" className={"portfolio-section " + props.displayClass}>
            <div id="home-top" className="center-content">
                <p id="top-link" className="home-links" onClick={props.displayRecentWork}>
                    <FormattedMessage id="app.menu-recent-work" defaultMessage="Recent Work"/>
                </p>
            </div>
            <div id="home-middle">
                <div id="home-middle-left"  className="center-content">
                    <p id="left-link" className="home-links" onClick={props.displayAbout}>
                        <FormattedMessage id="app.menu-about" defaultMessage="About"/>
                    </p>
                </div>
                <div id="home-middle-center" className="center-content">
                    <h1 id="greetings">
                        <FormattedMessage id="app.greetings-1" defaultMessage="Hi, I'm Jeremy,"/>
                        <br/>
                        <FormattedMessage id="app.greetings-2" defaultMessage="Web Developer."/>
                    </h1>
                </div>
                <div id="home-middle-right"  className="center-content">
                    <p id="right-link" className="home-links" onClick={props.displayResume}>
                        <FormattedMessage id="app.menu-resume" defaultMessage="Resume"/>
                    </p>
                </div>
            </div>
            <div id="home-bottom" className="center-content">
                <p id="bottom-link" className="home-links" onClick={props.displayContact}>
                        <FormattedMessage id="app.menu-contact" defaultMessage="Contact"/>
                    </p>
            </div>
        </div>
    );
    
}

export default Home;