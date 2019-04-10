import React from 'react';

import RandomBetween from './Utils/RandomBetween';

import './Star.css';

function Star(props){
    let size = RandomBetween(1, 2);
    let style = {
        top: props.top + "px",
        left: props.left + "px",
        width: size + "px",
        height: size + "px",
        boxShadow: "0 0 " + size + "px"  + "#FFF",
        animationDelay: RandomBetween(0.2, 2) + "s"
    };

    //more or less one chance in three to twinkle
    let willItTwinkle = Math.round(RandomBetween(1, 3)) === 2 ? "star twinkling-star" : "star";

    return(
        <div className={willItTwinkle} style={style}></div>
    );
}

export default Star;