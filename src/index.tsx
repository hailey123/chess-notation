import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { notationInstruction } from './reducers';
import { StoreState } from './types/index';

import './index.css';
import { ChessNotationAction } from './actions';

const store = createStore<StoreState, ChessNotationAction, any, any>(notationInstruction, {
  inGameLoop: false,
  coordsPerRound: 8,
  showingTimingResult: false,
  currentCoords: { file: 'F', rank: 3 }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
