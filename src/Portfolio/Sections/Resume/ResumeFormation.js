import React from 'react';
import ResumeFormationElement from './ResumeFormationElement';

function ResumeFormation(props){
    let formations = [];
    for(let i=1; i <= 2; i++){
        formations.push({date: ("app.formation-" + i + ".date"), name: ("app.formation-" + i + ".name"), place:("app.formation-" + i + ".place")});
    }

    return(
        <div>
            {formations.map(formation => <ResumeFormationElement formation={formation}/>)}
        </div>
    );
}
export default ResumeFormation;