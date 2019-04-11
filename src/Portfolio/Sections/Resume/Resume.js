import React from 'react';
import { FormattedMessage } from 'react-intl';

import './Resume.css';
import ResumeNav from './ResumeNav';
import ResumeFormation from './ResumeFormation';
import ResumeJobs from './ResumeJobs';


class Resume extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            formationActive: true,
            jobActive: false,
            skillsActive: false
        }

    }
    //EVEN EASIER -> IN RENDER under ResumeNav: 
    //{this.state.formationActive && <Formation/>}
    //{this.state.jobActive && <Jobs/>}
    //{this.state.skillsActive && <Skills/>}

    //IF YOU WANT SOME ANIMATION between YOU LOAD THEM ALL WITH A CLASS SHOW/HIDDEN BASED ON this.state.xxxActive
    //AND THEIR WRAPPERs HAVE THE SAME CSS class !
    handleNavClick = (name) => {
        switch(name){
            case 'formation': this.setState({formationActive: true, jobActive: false, skillsActive: false });
            break;
            case 'job': this.setState({formationActive: false, jobActive: true, skillsActive: false});
            break;
            case 'skills': this.setState({formationActive: false, jobActive: false, skillsActive: true });
            break;
        }
    }

    render(){
        return(
            <div id="resume-section" className={"portfolio-section " + this.props.displayClass}>            
                <div className="vertical-back-home center-content">
                    <i className="fas fa-chevron-left back-home-btn" onClick={this.props.backHome} id="resume"></i>
                </div>
                <div className="vertical-main-section">
                    <h1 className="main-section-title" id="resume-title"><FormattedMessage id="app.resume.title" defaultMessage="Resume"/></h1>
                    <div id="resume-wrapper">
                        <ResumeNav handleNavClick={this.handleNavClick} navState={this.state}/>
                        
                        <div id="resume-parts-wrapper">
                            {this.state.formationActive && <ResumeFormation/>}
                            {this.state.jobActive && <ResumeJobs/>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;