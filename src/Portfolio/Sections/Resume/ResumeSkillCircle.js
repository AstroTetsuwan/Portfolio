import React from 'react';

import './ResumeSkillCircle.css';

class ResumeSkillCircle extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.init();
    }

    init = () => {
        let canvas = document.getElementById("resume-skill-circle-" + this.props.id);
        if(canvas.getContext){           
            this.drawSkill(canvas.getContext('2d'));
        }
        else{
            //do something if canvas is not supported
        }
    }

    drawSkill = (ctx) => {       
        let no = 0; //start point percentage
        let pointToFill = 4.72; //where to start the circle -> 0h00 on a clock (top of it)
        let cw = ctx.canvas.width;
        let ch = ctx.canvas.height;
        let percentageLimit = this.props.percentage || 100;
        let animationControl;
        let img = new Image();
        let imgW = this.props.imgSize,
            imgH = this.props.imgSize,
            imgTop = this.props.imgTop,
            imgLeft = this.props.imgLeft;
        img.src = this.props.img;
        let name = this.props.name;
        img.onload = () => {          
           animationControl = window.setInterval(fillCircle, 10);
        }     
        function fillCircle(){
            let diff = ((no/100) * Math.PI * 2 * 10);
            ctx.clearRect(0, 0, cw, ch);          
            ctx.drawImage(img, imgLeft, imgTop, imgW, imgH);           
            ctx.font = "16px sans-serif";
            ctx.fillText(name, 50, 15);
            ctx.lineWidth = 5;
            ctx.fillStyle = "#e2efdf";
            ctx.strokeStyle = "#b3ffff";
            ctx.textAlign = 'center';
            ctx.font = "22px sans-serif";
            ctx.fillText(no+'%', 55, 150);
            ctx.beginPath();
            ctx.arc(50, 80, 45, pointToFill, (diff / 10 + pointToFill));
            ctx.stroke();
            
            if(no >= percentageLimit){
                window.clearInterval(animationControl)
            }
            no++;
        }       
    }

    

    render(){
        return(
            <div style={{position: "relative", top:(this.props.top + "px"), left:(this.props.left + "px")}}>
                <div className="skill-circle-wrapper" >
                    <div className="full-circle"></div>
                    <canvas className="skill-circle-canvas" height="150" width="100" id={"resume-skill-circle-" + this.props.id}></canvas>
                </div>
            </div>
        );
     }       
}

export default ResumeSkillCircle;