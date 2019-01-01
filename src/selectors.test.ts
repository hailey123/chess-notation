import { StoreState, Coordinate, GameState, SettingsState } from './types';
import { BaseGameState, BaseSettingsState } from './constants/models';
import {
  getGame,
  getLeaderboard,
  getSettings,
  getCountdownValue,
  getCurrentCoordinate,
  getTimeLeftInRound,
  getRoundInProgress,
  getCount,
  getShowingPenalty,
  getRoundNotStarted,
  makeGetIsTargetSquare,
  getPlayAsBlack,
  getLightSquareColor,
  getDarkSquareColor,
  getPlayerColor
} from './selectors';
import * as util from './lib/boardUtils';

describe('selectors', () => {
  let baseState: StoreState;

  beforeAll(() => {
    baseState = {
      game: BaseGameState,
      leaderboard: {},
      settings: BaseSettingsState
    };
    Object.freeze(baseState);
  });

  test('getGame', () => {
    expect(getGame(baseState)).toEqual(BaseGameState);
  });
  test('getLeaderboard', () => {
    expect(getLeaderboard(baseState)).toEqual({});
  });
  test('getSettings', () => {
    expect(getSettings(baseState)).toEqual(BaseSettingsState);
  });
  test('getCountdownValue', () => {
    const countdownValue = 2;
    const game: GameState = {
      ...BaseGameState,
      countdownValue
    };
    expect(getCountdownValue.resultFunc(game)).toBe(countdownValue);
  });
  test('getCurrentCoordinate', () => {
    const currentCoords: Coordinate = {
      rank: 1,
      file: 'A'
    };
    Object.freeze(currentCoords);
    const game: GameState = {
      ...BaseGameState,
      currentCoords
    };
    expect(getCurrentCoordinate.resultFunc(game)).toEqual(currentCoords);
  });
  test('getTimeLeftInRound', () => {
    const timeLeftInRound = 15;
    const game: GameState = {
      ...BaseGameState,
      timeLeftInRound
    };
    expect(getTimeLeftInRound.resultFunc(game)).toEqual(timeLeftInRound);
  });
  test('getRoundInProgress', () => {
    const roundInProgress = true;
    const game: GameState = {
      ...BaseGameState,
      roundInProgress
    };
    expect(getRoundInProgress.resultFunc(game)).toEqual(roundInProgress);
  });
  test('getCount', () => {
    const count = 3;
    const game: GameState = {
      ...BaseGameState,
      count
    };
    expect(getCount.resultFunc(game)).toEqual(count);
  });
  test('getShowingPenalty', () => {
    const showingPenalty = true;
    const game: GameState = {
      ...BaseGameState,
      showingPenalty
    };
    expect(getShowingPenalty.resultFunc(game)).toEqual(showingPenalty);
  });
  test('getRoundNotStarted when round not started', () => {
    const countdownValue = null;
    const roundInProgress = false;
    const game: GameState = {
      ...BaseGameState,
      countdownValue,
      roundInProgress
    };
    expect(getRoundNotStarted.resultFunc(game)).toEqual(true);
  });
  test('getRoundNotStarted when counting down', () => {
    const countdownValue = 3;
    const roundInProgress = false;
    const game: GameState = {
      ...BaseGameState,
      countdownValue,
      roundInProgress
    };
    expect(getRoundNotStarted.resultFunc(game)).toEqual(false);
  });
  test('getRoundNotStarted when round in progress', () => {
    const countdownValue = null;
    const roundInProgress = true;
    const game: GameState = {
      ...BaseGameState,
      countdownValue,
      roundInProgress
    };
    expect(getRoundNotStarted.resultFunc(game)).toEqual(false);
  });
  test('makeGetIsTargetSquare for null coordinate', () => {
    const props = {
      coordinate: {
        rank: 1,
        file: 'A'
      } as Coordinate
    };
    const getIsTargetSquare = makeGetIsTargetSquare(props);
    expect(getIsTargetSquare.resultFunc(null)).toBe(false);
  });
  test('makeGetIsTargetSquare for non-target square', () => {
    jest.spyOn(util, 'coordinatesEqual').mockReturnValue(false);
    const props = {
      coordinate: {
        rank: 1,
        file: 'A'
      } as Coordinate
    };
    const getIsTargetSquare = makeGetIsTargetSquare(props);
    expect(getIsTargetSquare.resultFunc({
      rank: 1,
      file: 'B'
    })).toBe(false);
  });
  test('makeGetIsTargetSquare for target square', () => {
    jest.spyOn(util, 'coordinatesEqual').mockReturnValue(true);
    const coordinate: Coordinate = {
      rank: 1,
      file: 'A'
    };
    Object.freeze(coordinate);
    const props = {
      coordinate
    };
    const getIsTargetSquare = makeGetIsTargetSquare(props);
    expect(getIsTargetSquare.resultFunc(coordinate)).toBe(true);
  });
  test('getPlayAsBlack', () => {
    const playAsBlack = true;
    const settings: SettingsState = {
      ...BaseSettingsState,
      playAsBlack
    };
    expect(getPlayAsBlack.resultFunc(settings)).toBe(playAsBlack);
  });
  test('getLightSquareColor', () => {
    const lightSquareColor = 'white';
    const settings: SettingsState = {
      ...BaseSettingsState,
      lightSquareColor
    };
    expect(getLightSquareColor.resultFunc(settings)).toBe(lightSquareColor);
  });
  test('getDarkSquareColor', () => {
    const darkSquareColor = 'black';
    const settings: SettingsState = {
      ...BaseSettingsState,
      darkSquareColor
    };
    expect(getDarkSquareColor.resultFunc(settings)).toBe(darkSquareColor);
  });
  test('getPlayerColor when black', () => {
    const settings: SettingsState = {
      ...BaseSettingsState,
      playAsBlack: true
    };
    expect(getPlayerColor.resultFunc(settings)).toBe('Black');
  });
  test('getPlayerColor when white', () => {
    const settings: SettingsState = {
      ...BaseSettingsState,
      playAsBlack: false
    };
    expect(getPlayerColor.resultFunc(settings)).toBe('White');
  });
});
