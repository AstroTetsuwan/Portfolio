import React from 'react';
import ResumeFormationElement from './ResumeFormationElement';

function ResumeFormation(props){
    let formations = [];
    for(let i=1; i <= 4; i++){
        formations.push({date: ("app.formation-" + i + ".date"), name: ("app.formation-" + i + ".name"), place:("app.formation-" + i + ".place")});
    }

    return(
        <div className="resume-part-section">
            {formations.map((formation, i) => <ResumeFormationElement formation={formation} key={i}/>)}
        </div>
    );
}
export default ResumeFormation;