import React, { Component } from 'react';
import Main from './container/Main';
import Tutorial from './container/Tutorial'
import './css/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;