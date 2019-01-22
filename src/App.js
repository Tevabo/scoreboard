import React, { Component } from 'react';
import './App.css';
import Title from './Title'
import Scoreboard from './Scoreboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title content="" />
          <main>
            <Scoreboard />
          </main>
        </header>
      </div>
    );
  }
}

export default App;
