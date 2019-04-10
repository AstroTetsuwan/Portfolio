import React from 'react';
import { FormattedMessage } from 'react-intl';
import './ResumeFormationElement.css';

//in translation for each formation "app.formation-1.date": "Aout 2013 - Juillet 2016"... then in Resume component you pass: "app.formation-1.date" as props to this
function ResumeFormationElement(props){
    return(
        <div className="resume-element">
            <div className="resume-element-date center-content"><FormattedMessage id={props.formation.date} defaultMessage="Resume"/></div>
            <div className="resume-element-formation-place-wrapper">
                <div className="resume-element-formation"><FormattedMessage id={props.formation.name} defaultMessage="Resume"/></div>
                <div className="resume-element-place"><FormattedMessage id={props.formation.place} defaultMessage="Resume"/></div>
            </div>
        </div>
    );
}

export default ResumeFormationElement;