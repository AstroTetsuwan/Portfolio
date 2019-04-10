import React from 'react';

import Home from './Home';
import RecentWork from './RecentWork';
import Resume from './Resume';
import Contact from './Contact';
import About from './About';

import './Portfolio.css';

class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            home: "home-show",
            recentWork: "recentWork-hide",
            resume: "resume-hide",
            contact: "contact-hide",
            about: "about-hide"
        }

    }

    displayRecentWork = () => { 
        this.setState({home: "home-hide-bottom", recentWork: "recentWork-show"}); 
    }
    displayResume = () => { 
        this.setState({home: "home-hide-left", resume: "resume-show"}); 
    }
    displayContact = () => { 
        this.setState({home: "home-hide-top", contact: "contact-show"}); 
    }
    displayAbout = () => { 
        this.setState({home: "home-hide-right", about: "about-show"}); 
    }

    backHome = (e) =>{
        let id = e.target.id;
        this.setState({home: "home-show", [id]: (id + "-hide") });
    }

    render(){
        return(
            <div id="portfolio">
                <Home displayClass={this.state.home}
                    displayRecentWork={this.displayRecentWork}
                    displayResume={this.displayResume} 
                    displayContact={this.displayContact} 
                    displayAbout={this.displayAbout}/>
                <RecentWork backHome={this.backHome} displayClass={this.state.recentWork}/>
                <Resume backHome={this.backHome} displayClass={this.state.resume}/>
                <Contact backHome={this.backHome} displayClass={this.state.contact}/>
                <About backHome={this.backHome} displayClass={this.state.about}/>
            </div>
        );
    }
}

export default Portfolio;