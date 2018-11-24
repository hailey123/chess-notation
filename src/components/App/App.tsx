import * as React from 'react';

import Board from '../Board';
import NotationInstruction from '../NotationInstruction';
import StartButton from '../StartButton';

import './App.css';
// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <header className="app-header">
          {/* <img src={logo} className='app-logo' alt='logo' /> */}
          <h1 className="app-title">Board Coordinates Practice</h1>
        </header>
        <main>
          <div className="left" />
          <div className="mid">
            <NotationInstruction />
            <Board />
          </div>
          <div className="right">
            <StartButton />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
