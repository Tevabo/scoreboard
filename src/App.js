import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './Title'
import Scoreboard from './Scoreboard'
// import Player from './Player'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title content="" />
          <main>
            <Scoreboard />
            {/* <Player /> */}
          </main>
        </header>
      </div>
    );
  }
}

export default App;
