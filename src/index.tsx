import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import game from './reducers/game';
import leaderboard from './reducers/leaderboard';
import settings from './reducers/settings';
import { StoreState } from './types';

import './index.css';
import { ChessNotationAction } from './actions';

const rootReducer = combineReducers({ game, leaderboard, settings });

const store = createStore<StoreState, ChessNotationAction, any, any>(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
