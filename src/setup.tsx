import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import game from './reducers/game';
import leaderboard from './reducers/leaderboard';
import settings from './reducers/settings';
import { StoreState } from './types';
import { Action } from './actions';

export function configureStore(): any {
  const rootReducer = combineReducers({ game, leaderboard, settings });

  const middleware = compose(
    applyMiddleware(reduxThunk),
    (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f
  );

  return createStore<StoreState, Action, any, any>(
    rootReducer,
    middleware
  );
}

export function render(store: any): void {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
  );
}

export function init(): void {
  const store = configureStore();
  render(store);
  registerServiceWorker();
}
