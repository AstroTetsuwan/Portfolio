import React from 'react';

import './App.css';

import SkyBackground from './SkyBackground/SkyBackground';
import Portfolio from './Portfolio/Portfolio';
import LanguagePicker from './LanguagePicker';

import { IntlProvider } from 'react-intl';
import { addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_fr from 'react-intl/locale-data/fr';
import messages_en from './translations/en';
import messages_fr from './translations/fr';



class App extends React.Component {
  
  constructor(props){
    super(props);
    
    addLocaleData([...locale_en, ...locale_fr]);    
    const language = navigator.language.split(/[-_]/)[0];

    this.messages = {
      'en': messages_en,
      'fr': messages_fr
    }

    this.state = {
      language: language      
    }   
  }

  changeLanguage = (language) => {
    this.setState({language: language});
  }

  render() {
    return (
      <div className="App">
        <SkyBackground/>
        <LanguagePicker changeLanguage={this.changeLanguage}/>
        <IntlProvider locale={this.state.language} messages={this.messages[this.state.language]}>
          <Portfolio/>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
