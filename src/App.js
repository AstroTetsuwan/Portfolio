import React from 'react';

import './App.css';

import SkyBackground from './SkyBackground/SkyBackground';
import Portfolio from './Portfolio/Portfolio';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SkyBackground/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
