import React from 'react';

class ResumeSkillCircle extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <div>
                <canvas height="100" width="100" id={"resume-skill-circle-" + this.props.id}/>
            </div>
        );
     }       
}

export default ResumeSkillCircle;