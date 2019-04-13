import React from 'react';
import { FormattedMessage } from 'react-intl';

import ResumeSkillCircle from './ResumeSkillCircle';
import './ResumeSkills.css';

import jsLogo from './skillsImg/jsLogo.png';
import nodeLogo from './skillsImg/nodeLogo.png';
import html5Logo from './skillsImg/html5Logo2.png';
import css3Logo from './skillsImg/css3Logo.png';
import reactLogo from './skillsImg/reactLogo.png';
import sqlLogo from './skillsImg/sqlLogo.png';
import phpLogo from './skillsImg/phpLogo.png';
import javaLogo from './skillsImg/javaLogo.png';


class ResumeSkills extends React.Component{
    constructor(props){
        super(props);   

        this.skills = [
            {percentage: 76, img: html5Logo, name: "HTML5", imgSize: 106, imgTop: 27, imgLeft: -3},
            {percentage: 82, img: css3Logo, name: "CSS3", imgSize: 80, imgTop: 40, imgLeft: 10},
            {percentage: 73, img: jsLogo, name: "JavaScript", imgSize: 102, imgTop: 29, imgLeft: -1},
            {percentage: 65, img: reactLogo, name: "ReactJS", imgSize: 102, imgTop: 29, imgLeft: -1},
            {percentage: 62, img: nodeLogo, name: "NodeJS", imgSize: 80, imgTop: 40, imgLeft: 10},
            {percentage: 63, img: sqlLogo, name: "SQL", imgSize: 80, imgTop: 40, imgLeft: 10},
            {percentage: 63, img: phpLogo, name: "PHP", imgSize: 66, imgTop: 47, imgLeft: 14},
            {percentage: 50, img: javaLogo, name: "Java", imgSize: 74, imgTop: 40, imgLeft: 12}
        ];
    }

    //componentDidMount -> addEvenetListener on resize -> this state nbrOfCirclePerRow -> change resumecircleskill top props

    render(){
        return(
            <div className="resume-part-section" style={{paddingLeft: "15px"}}>
                <h3 class="skills-part-title"><FormattedMessage id="app.skills.title-1" defaultMessage="Developer skills"/></h3>
                {
                    this.skills.map((skill, i) => <ResumeSkillCircle id={i} key={i} 
                                                percentage={skill.percentage} img={skill.img} name={skill.name} 
                                                top={0} left={i * 120}
                                                imgSize={skill.imgSize} imgTop={skill.imgTop} imgLeft={skill.imgLeft}/>)
                }
                
                <h3 class="skills-part-title"><FormattedMessage id="app.skills.title-2" defaultMessage="Languages"/></h3>
                <p className="skill-lang"><FormattedMessage id="app.skills.lang-1" defaultMessage="French: Native"/></p>
                <p className="skill-lang"><FormattedMessage id="app.skills.lang-2" defaultMessage="English: Advanced"/></p>
            </div>
        );
    }
}
export default ResumeSkills;