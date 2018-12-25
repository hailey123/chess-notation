import game from './game';
import { GameState, Coordinate } from '../types';
import * as util from '../lib/boardUtils';
import { BaseGameState } from '../constants/models';
import { HANDLE_SQUARE_CLICKED, SET_COUNTDOWN_VALUE, START_PLAY, SET_ROUND_TIMER_VALUE, END_ROUND, RESET_COUNT } from '../constants/actions';
import { HandleSquareClicked, Action, SetCountdownValue, StartPlay, SetRoundTimerValue, EndRound, ResetCount } from '../actions';

describe('game reducer', () => {
  let mockGenerateRandomCoordinates: jest.SpyInstance<(
    lastCoords?: Coordinate | null
  ) => Coordinate>;
  const mockCoordinate: Coordinate = {
    file: 'H',
    rank: 6
  };
  beforeAll(() => {
    Object.freeze(mockCoordinate);
  });
  beforeEach(() => {
    mockGenerateRandomCoordinates = jest.spyOn(util, 'generateRandomCoords').mockReturnValue(
      mockCoordinate
    );
  });
  afterEach(() => {
    // TODO: jest.restoreAllMocks in afterEach currently doesn't work.
    // After ejecting, see if I can fix this.
    // In the meantime, mocks must be individually restored.
    mockGenerateRandomCoordinates.mockRestore();
  });
  it('should return the initial state', () => {
    expect(game(undefined, {} as Action)).toEqual(BaseGameState);
  });
  it('should handle HANDLE_SQUARE_CLICKED for target square', () => {
    const countBefore = 4;
    const stateBefore: GameState = {
      ...BaseGameState,
      count: countBefore
    };
    Object.freeze(stateBefore);
    const stateAfter: GameState = {
      ...BaseGameState,
      currentCoords: mockCoordinate,
      count: countBefore + 1
    };
    const action: HandleSquareClicked = {
      type: HANDLE_SQUARE_CLICKED,
      isTarget: true
    };

    expect(game(stateBefore, action)).toEqual(stateAfter);
  });
  it('should handle HANDLE_SQUARE_CLICKED for non-target square', () => {
    const stateBefore: GameState = {
      ...BaseGameState,
      count: 4
    };
    Object.freeze(stateBefore);
    const action: HandleSquareClicked = {
      type: HANDLE_SQUARE_CLICKED,
      isTarget: false
    };

    expect(game(stateBefore, action)).toEqual(stateBefore);
  });
  it('should handle SET_COUNTDOWN_VALUE', () => {
    const countdownValueBefore = 3;
    const countdownValueAfter = countdownValueBefore - 1;
    const stateBefore: GameState = {
      ...BaseGameState,
      countdownValue: countdownValueBefore,
      currentCoords: mockCoordinate
    };
    Object.freeze(stateBefore);
    const stateAfter: GameState = {
      ...BaseGameState,
      countdownValue: countdownValueAfter,
      currentCoords: null
    };
    const action: SetCountdownValue = {
      type: SET_COUNTDOWN_VALUE,
      value: countdownValueAfter
    };

    expect(game(stateBefore, action)).toEqual(stateAfter);
  });
  it('should handle START_PLAY', () => {
    const stateBefore: GameState = {
      ...BaseGameState,
      roundInProgress: false,
      countdownValue: 1
    };
    Object.freeze(stateBefore);
    const stateAfter: GameState = {
      ...BaseGameState,
      roundInProgress: true,
      countdownValue: null,
      currentCoords: mockCoordinate
    };
    const action: StartPlay = {
      type: START_PLAY
    };

    expect(game(stateBefore, action)).toEqual(stateAfter);
  });
  it('should handle SET_ROUND_TIMER_VALUE', () => {
    const timerValueBefore = 3;
    const timerValueAfter = timerValueBefore - 1;
    const stateBefore: GameState = {
      ...BaseGameState,
      timeLeftInRound: timerValueBefore
    };
    Object.freeze(stateBefore);
    const stateAfter: GameState = {
      ...BaseGameState,
      timeLeftInRound: timerValueAfter
    };
    const action: SetRoundTimerValue = {
      type: SET_ROUND_TIMER_VALUE,
      value: timerValueAfter
    };

    expect(game(stateBefore, action)).toEqual(stateAfter);
  });
  it('should handle END_ROUND', () => {
    const stateBefore: GameState = {
      ...BaseGameState,
      roundInProgress: true,
      timeLeftInRound: 1
    };
    Object.freeze(stateBefore);
    const stateAfter: GameState = {
      ...BaseGameState,
      roundInProgress: false,
      timeLeftInRound: 0
    };
    const action: EndRound = {
      type: END_ROUND
    };

    expect(game(stateBefore, action)).toEqual(stateAfter);
  });
  it('should handle RESET_COUNT', () => {
    const stateBefore: GameState = {
      ...BaseGameState,
      count: 23
    };
    Object.freeze(stateBefore);
    const stateAfter: GameState = {
      ...BaseGameState,
      count: 0
    };
    const action: ResetCount = {
      type: RESET_COUNT
    };

    expect(game(stateBefore, action)).toEqual(stateAfter);
  });
});
