import * as React from 'react';
import './App.css';

import Board from './components/Board';
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
        <div className="instruction">F3</div>
      </div>
    );
  }
}

export default App;
