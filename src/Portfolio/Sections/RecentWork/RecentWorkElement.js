import React from 'react';
import { FormattedMessage } from 'react-intl';

//JUst the image appear
//on hover make recent-work-element-text-container -> visible -> Title and description
function RecentWorkElement(props){
    let style={
        background: "url(" + props.project.img + ")",
        backgroundPosition: "center center",
        backgroundSize: "contain"
    }
    return(
        <div className="recent-work-element" style={style}>           
            <div className="recent-work-element-text-container">            
                <h3 className="recent-work-element-title">{props.project.title}</h3>
                <p className="recent-work-element-p">
                    <FormattedMessage id={props.project.comment} defaultMessage="Recent Work"/>
                </p>
                <a href={props.project.link}><FormattedMessage id="app.recent-work.visit" defaultMessage="Recent Work"/></a>
            </div>
        </div>
    );
}

export default RecentWorkElement;