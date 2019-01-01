import { createSelector } from 'reselect';

import { StoreState, GameState, SettingsState } from './types';

// Basic input selectors (not memoized)
export const getGame = (state: StoreState) => state.game;
export const getLeaderboard = (state: StoreState) => state.leaderboard;
export const getSettings = (state: StoreState) => state.settings;

// Game state derived getters (direct)
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

// Game state derived getters (with computation)
export const getRoundInitiated = createSelector(
  getGame, (game: GameState) => !game.countdownValue && !game.roundInProgress
);

// Settings state derived getters (direct)
export const getPlayAsBlack = createSelector(
  getSettings, (settings: SettingsState) => settings.playAsBlack
);
export const getLightSquareColor = createSelector(
  getSettings, (settings: SettingsState) => settings.lightSquareColor
);
export const getDarkSquareColor = createSelector(
  getSettings, (settings: SettingsState) => settings.darkSquareColor
);
