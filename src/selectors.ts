import { createSelector } from 'reselect';

import { StoreState, GameState, SettingsState, PlayerColor, Coordinate } from './types';
import { coordinatesEqual } from './lib/boardUtils';

// Basic input selectors (not memoized)
export const getGame = (state: StoreState) => state.game;
export const getLeaderboard = (state: StoreState) => state.leaderboard;
export const getSettings = (state: StoreState) => state.settings;

// Derived selectors
export const getCountdownValue = createSelector(
  getGame, (game: GameState) => game.countdownValue
);

export const getCurrentCoordinate = createSelector(
  getGame, (game: GameState) => game.currentCoords
);

export const getTimeLeftInRound = createSelector(
  getGame, (game: GameState) => game.timeLeftInRound
);

export const getRoundInProgress = createSelector(
  getGame, (game: GameState) => game.roundInProgress
);

export const getCount = createSelector(
  getGame, (game: GameState) => game.count
);

export const getShowingPenalty = createSelector(
  getGame, (game: GameState) => game.showingPenalty
);

/**
 * Returns true from the point the START button is clicked to when the
 * round timer expires
 */
export const getRoundInitiated = createSelector(
  getGame, (game: GameState) => !game.countdownValue && !game.roundInProgress
);

// tslint:disable-next-line:max-line-length
// https://github.com/reduxjs/reselect#sharing-selectors-with-props-across-multiple-component-instances
export const makeGetIsTargetSquare = (props: { coordinate: Coordinate }) => createSelector(
  getCurrentCoordinate, (
    coordinate: Coordinate
  ) => coordinate && coordinatesEqual(coordinate, props.coordinate)
);

export const getPlayAsBlack = createSelector(
  getSettings, (settings: SettingsState) => settings.playAsBlack
);

export const getLightSquareColor = createSelector(
  getSettings, (settings: SettingsState) => settings.lightSquareColor
);

export const getDarkSquareColor = createSelector(
  getSettings, (settings: SettingsState) => settings.darkSquareColor
);

/**
 * Returns the color that the player is "playing as", in accordance with
 * the current board direction
 */
export const getPlayerColor: (state: StoreState) => PlayerColor = createSelector(
  getSettings, (settings: SettingsState) => settings.playAsBlack ? 'Black' : 'White'
);
