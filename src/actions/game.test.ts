import * as actions from './game';
import * as constants from '../constants/actions';
import { RoundStartCountdownSeconds, RoundLengthSeconds } from '../constants/models';
import { GameState, StoreState } from '../types';

describe('game actions', () => {
  it('should create an action to show next coordinates', () => {
    const expectedAction: actions.ShowNextCoords = {
      type: constants.SHOW_NEXT_COORDS
    };
    expect(actions.showNextCoords()).toEqual(expectedAction);
  });
  it('should create an action to handle target square clicked', () => {
    const isTarget = true;
    const expectedAction: actions.HandleSquareClicked = {
      isTarget,
      type: constants.HANDLE_SQUARE_CLICKED
    };
    expect(actions.handleSquareClicked(isTarget)).toEqual(expectedAction);
  });
  it('should create an action to handle non-target square clicked', () => {
    const isTarget = false;
    const expectedAction: actions.HandleSquareClicked = {
      isTarget,
      type: constants.HANDLE_SQUARE_CLICKED,
    };
    expect(actions.handleSquareClicked(isTarget)).toEqual(expectedAction);
  });
  it('should create an action to set the countdown value', () => {
    const value = 2;
    const expectedAction: actions.SetCountdownValue = {
      value,
      type: constants.SET_COUNTDOWN_VALUE
    };
    expect(actions.setCountdownValue(value)).toEqual(expectedAction);
  });
  it('should create an action to start play', () => {
    const expectedAction: actions.StartPlay = {
      type: constants.START_PLAY
    };
    expect(actions.startPlay()).toEqual(expectedAction);
  });
  it('should create an action to set the round timer value', () => {
    const value = 40;
    const expectedAction: actions.SetRoundTimerValue = {
      value,
      type: constants.SET_ROUND_TIMER_VALUE
    };
    expect(actions.setRoundTimerValue(value)).toEqual(expectedAction);
  });
  it('should create an action to end a round', () => {
    const expectedAction: actions.EndRound = {
      type: constants.END_ROUND
    };
    expect(actions.endRound()).toEqual(expectedAction);
  });
  it('should create an action to reset the count', () => {
    const expectedAction: actions.ResetCount = {
      type: constants.RESET_COUNT
    };
    expect(actions.resetCount()).toEqual(expectedAction);
  });
  describe('startRound', () => {
    it('should return a function that returns a Promise', () => {
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn();

      const thunkAction = actions.startRound();

      expect(thunkAction(mockDispatch, mockGetState, null)).toBeInstanceOf(Promise);
    });
    test('setRoundStartCountdownInterval initializes properly', () => {
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn();
      const mockResolve = jest.fn();
      const mockSetInterval = jest.spyOn(window, 'setInterval').mockImplementation();

      actions.setRoundStartCountdownInterval(mockDispatch, mockGetState, mockResolve);

      expect(mockDispatch).toHaveBeenCalledWith(
        actions.setCountdownValue(RoundStartCountdownSeconds)
      );
      expect(mockDispatch).toHaveBeenCalledWith(
        actions.setRoundTimerValue(RoundLengthSeconds)
      );
      expect(mockSetInterval).toHaveBeenCalledTimes(1);
      mockSetInterval.mockRestore();
    });
    test('setRoundTimerInterval initializes properly', () => {
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn().mockReturnValue({
        game: { timeLeftInRound: 30 } as GameState
      } as StoreState);
      const mockResolve = jest.fn();
      const mockSetInterval = jest.spyOn(window, 'setInterval').mockImplementation();

      actions.setRoundTimerInterval(mockDispatch, mockGetState, mockResolve);

      expect(mockSetInterval).toHaveBeenCalledTimes(1);
      mockSetInterval.mockRestore();
    });
  });
});
