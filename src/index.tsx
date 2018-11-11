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
import { Action } from './actions';

const rootReducer = combineReducers({ game, leaderboard, settings });

const store = createStore<StoreState, Action, any, any>(
  rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__
  && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
