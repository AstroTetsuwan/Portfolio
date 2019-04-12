import React from 'react';

import ResumeSkillCircle from './ResumeSkillCircle';

import jsLogo from './skillsImg/jsLogo.png';
import nodeLogo from './skillsImg/nodeLogo.png';
import html5Logo from './skillsImg/html5Logo.png';

function ResumeSkills(props){
    return(
        <div className="resume-part-section" id="resume-skills-main-wrapper">
            <ResumeSkillCircle id="1" percentage={95} img={jsLogo} name="JavaScript" top="0" left="0" imgSize={102} imgTop={29} imgLeft={-1}/>
            <ResumeSkillCircle id="2" percentage={65} img={nodeLogo} name="NodeJS" top="0" left="120" imgSize={80} imgTop={40} imgLeft={10}/>
            <ResumeSkillCircle id="3" percentage={65} img={html5Logo} name="HTML5" top="0" left="240" imgSize={84} imgTop={38} imgLeft={8}/>
        </div>
    );
}

export default ResumeSkills;