import { createStore, combineReducers, applyMiddleware, compose, Store } from 'redux';
import reduxThunk from 'redux-thunk';
import game from './reducers/game';
import leaderboard from './reducers/leaderboard';
import settings from './reducers/settings';
import { StoreState } from './types';
import { Action } from './actions';

export function configureStore(): Store {
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
