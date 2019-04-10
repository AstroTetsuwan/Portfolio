import React from 'react';

import './ShootingStar.css';

class ShootingStar extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        let star = document.getElementById("star-" + this.props.id);
        let starTop = this.props.topStart,
            starLeft = this.props.leftStart;
        let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 

        star.style.top = starTop + "px";
        star.style.left = starLeft + "px";
        star.animate([
            {   
                transform: 'translateX(' + starLeft + 'px) translateY(' + starTop + 'px)',
                opacity: 0
            },
            {   
                transform: 'translateX(' + ((windowWidth / 3) + starLeft) + 'px) translateY(' + ((windowHeight / 3) + starTop) + 'px)',
                opacity: 1
            },
            {   
                transform: 'translateX(' + (windowWidth + starLeft) + 'px) translateY(' + (windowHeight + starTop) + 'px)',
                opacity: 0
            }
        ], {
          duration: 5000,
          delay: this.props.delay,
          iterations: Infinity,
          easing: "ease-in-out"   
        });
    }

    render(){
        return(
            <div className="shooting-star" id={"star-" + this.props.id}>
                <div className="tail" id={"tail-" + this.props.id}></div>
            </div>
        );
    }    
}

export default ShootingStar;