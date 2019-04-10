import React from 'react';

import Sun from './Sun';
import Mercury from './Planets/Mercury';
import Venus from './Planets/Venus';
import Earth from './Planets/Earth';
import Mars from './Planets/Mars';
import Saturn from './Planets/Saturn';
import Jupiter from './Planets/Jupiter';
import Uranus from './Planets/Uranus';
import Neptune from './Planets/Neptune';

import './SolarSystem.css';


function SolarSystem(props){

    return(
        <div id="solar-system-wrapper">
            <div id="solar-system">
                <Sun/>
                <Mercury/>
                <Venus/>
                <Earth/>
                <Mars/>
                <Jupiter/>
                <Saturn/>
                <Uranus/>
                <Neptune/>
            </div>
        </div>
    );

}

export default SolarSystem;