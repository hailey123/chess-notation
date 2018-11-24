import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Board from '../Board';
import NotationInstruction from '../NotationInstruction';
import StartButton from '../StartButton';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#673ab7'
    },
    secondary: {
      main: '#1de9b6'
    },
  },
});

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="app">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Board Coordinates Practice
          </Typography>
            </Toolbar>
          </AppBar>
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
      </MuiThemeProvider>
    );
  }
}

export default App;
