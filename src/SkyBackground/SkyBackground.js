import React from 'react';

import RandomBetween from './Utils/RandomBetween';

import Star from './Star';
import './SkyBackground.css';
import ShootingStar from './ShootingStar';

import SolarSystem from './SolarSystem/SolarSystem';

class SkyBackground extends React.Component{
  
    constructor(props){
        super(props);

        this.state = {
            stars: this.getStars(),
            shootingStars: this.getShootingStars()
        }

        this.interval = false;
    }

    componentDidMount(){
        this.interval = window.setInterval(() => {
            this.setState({shootingStars: this.getShootingStars()});
        }, 10000);
    }

    getStars(){
        let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
        let wBlocks = Math.ceil(windowWidth / 100);
        let hBlocks = Math.ceil(windowHeight / 100);
        let stars = [];
    
        for(let i = 0; i < wBlocks; i++){
            for(let j = 0; j < hBlocks; j++){
                let randomNumberOfStarsInThisBlock = RandomBetween(10, 20);
                for(let k = 0; k < randomNumberOfStarsInThisBlock; k++){
                    let randomStarLeft = RandomBetween((i * 100), ((i+1) * 100));
                    let randomStarTop = RandomBetween((j * 100), ((j+1) * 100));
                    if(randomStarLeft < windowWidth && randomStarTop < windowHeight){
                        stars.push(<Star key={i + "-" + j + "-" + k} top={randomStarTop} left={randomStarLeft}/>);
                    }                    
                }
            }
        }
    
        return stars;
    }

    getShootingStars(){
        let shootingStars = [];
        let randomNumberOfShootingStars = RandomBetween(2, 5);
        for(let i = 0; i < randomNumberOfShootingStars; i++){
            shootingStars.push(
                <ShootingStar key={i} id={i} 
                    topStart={RandomBetween(0, 50)}  
                    leftStart={RandomBetween(0, 50)} 
                    delay={RandomBetween(100, 5000)}/>
            );
        }
        return shootingStars;
    }
    
    render(){
        //YOU CAN MAKE THE PLANETS TURN ON THEIR ORBITS -> MAKE A "FIX" BLOCK OF PLANETS, MAX WIDTH OF CELL PHONE, GROW WHEN THEY COME OVER THE SUN, HIDE WHEN BEHIND, 
        // two phases: when they go from left to right, z index max to the furthest, closest will be one z index more than sun,
        // then when they go other way, it's inverted, closest is one z index less than the sun,etc...
        return(
            <div id="sky-background">
                <SolarSystem/>    
                {this.state.shootingStars}
                {this.state.stars}           
            </div>
        );
    }
    
}

export default SkyBackground;