import React from 'react';

import './Home.css';

function Home(props){
    
    return(
        <div id="home" className={"portfolio-section " + props.displayClass}>
            <div id="home-top" className="center-content">
                <p id="top-link" className="home-links" 
                    onClick={props.displayRecentWork}>Recent Work</p>
            </div>
            <div id="home-middle">
                <div id="home-middle-left"  className="center-content">
                    <p id="left-link" className="home-links"
                        onClick={props.displayAbout}>About</p>
                </div>
                <div id="home-middle-center" className="center-content">
                    <h1 id="greetings">
                        Hi, I'm Jeremy, <br/>
                        Web Developer.
                    </h1>
                </div>
                <div id="home-middle-right"  className="center-content">
                    <p id="right-link" className="home-links"
                        onClick={props.displayResume}>Resume</p>
                </div>
            </div>
            <div id="home-bottom" className="center-content">
                <p id="bottom-link" className="home-links"
                        onClick={props.displayContact}>Contact</p>
            </div>
        </div>
    );
    
}

export default Home;