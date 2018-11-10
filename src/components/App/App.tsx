import * as React from 'react';

import Board from '../Board';
import NotationInstruction from '../NotationInstruction/NotationInstruction';

import './App.css';
// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Board Coordinates Practice</h1>
        </header>
        <Board />
        <NotationInstruction />
      </div>
    );
  }
}

export default App;
