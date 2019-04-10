import React from 'react';

import  './Earth.css';

function Earth(props){
    return(
        <div id="earth" className="planet">
            <div className="clouds" id="clouds-1"></div>
            <div className="clouds" id="clouds-2"></div>
            <div className="continent"></div>
        </div>
    );
}

export default Earth;