import React from 'react';
import { FormattedMessage } from 'react-intl';
import './ResumeJobElement.css';

//in translation for each formation "app.formation-1.date": "Aout 2013 - Juillet 2016"... then in Resume component you pass: "app.formation-1.date" as props to this
function ResumeJobElement(props){
    return(
        <div className="resume-element">
            <div className="resume-element-date center-content"><FormattedMessage id={props.job.date} defaultMessage="Resume"/></div>
            <div className="resume-element-job-place-wrapper"  id={"resume-job-"+props.id}>
                <div className="resume-element-job"><FormattedMessage id={props.job.name} defaultMessage="Resume"/></div>
                <div className="resume-element-place"><FormattedMessage id={props.job.place} defaultMessage="Resume"/></div>               
            </div>
            <div className="tasks-wrapper">
                <ul>
                    {props.job.tasks.map(task => <li className="resume-element-task"><FormattedMessage id={task} defaultMessage="Resume"/></li>)}
                </ul>
            </div>
        </div>
    );
}

export default ResumeJobElement;