import React from 'react';

import './LanguagePicker.css';

function LanguagePicker(props){
    return(
        <div id="language-wrapper">
            <span className="language-btn" onClick={() => { props.changeLanguage('en'); }}>EN</span>
            <span> / </span>
            <span className="language-btn" onClick={() => { props.changeLanguage('fr'); }}>FR</span>
        </div>
    );
}

export default LanguagePicker;