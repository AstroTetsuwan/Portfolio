import React from 'react';
import { FormattedMessage } from 'react-intl';

function ResumeNav(props){
    return(
        <div id="resume-nav">
            <div className={"resume-nav-button " + (props.navState.formationActive ? "resume-nav-button-active" : "")} 
                onClick={() => props.handleNavClick("formation")}>
                <FormattedMessage id="app.resume.nav.education" defaultMessage="Education"/></div>
            <div className={"resume-nav-button " + (props.navState.jobActive ? "resume-nav-button-active" : "")} 
                onClick={() => props.handleNavClick("job")}>
                <FormattedMessage id="app.resume.nav.work" defaultMessage="Work Experience"/></div>
            <div className={"resume-nav-button " + (props.navState.skillsActive ? "resume-nav-button-active" : "")} 
                onClick={() => props.handleNavClick("skills")}>
                <FormattedMessage id="app.resume.nav.skills" defaultMessage="Skills"/></div>
        </div>
    );
}

export default ResumeNav;