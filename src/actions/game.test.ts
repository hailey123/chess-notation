import * as actions from './game';
import * as constants from '../constants/actions';
import {
  TimePenaltySeconds,
  RoundLengthSeconds,
  RoundStartCountdownSeconds,
  BaseGameState,
  BaseSettingsState
} from '../constants/models';
import { GameState, StoreState } from '../types';

describe('game actions', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
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
    const expectedAction: actions.SetRoundTimerValue = {
      value: RoundLengthSeconds,
      type: constants.SET_ROUND_TIMER_VALUE
    };
    expect(actions.setRoundTimerValue(RoundLengthSeconds)).toEqual(expectedAction);
  });
  it('should create an action to decrement the round timer value', () => {
    const value = TimePenaltySeconds;
    const expectedAction: actions.DecrementRoundTimerValue = {
      value,
      type: constants.DECREMENT_ROUND_TIMER_VALUE
    };
    expect(actions.decrementRoundTimerValue(value)).toEqual(expectedAction);
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
  describe('handleSquareClicked', () => {
    test('create an action to handle correct square clicked', () => {
      const expectedAction: actions.HandleCorrectSquareClicked = {
        type: constants.HANDLE_CORRECT_SQUARE_CLICKED
      };
      expect(actions.handleCorrectSquareClicked()).toEqual(expectedAction);
    });
    test('create an action to handle incorrect square clicked', () => {
      const expectedAction: actions.HandleIncorrectSquareClicked = {
        type: constants.HANDLE_INCORRECT_SQUARE_CLICKED
      };
      expect(actions.handleIncorrectSquareClicked()).toEqual(expectedAction);
    });
    test('create an action to finish showing a mis-click penalty', () => {
      const expectedAction: actions.DoneShowingPenalty = {
        type: constants.DONE_SHOWING_PENALTY
      };
      expect(actions.doneShowingPenalty()).toEqual(expectedAction);
    });
    it('should dispatch handleCorrectSquareClicked when isTarget is true', () => {
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn();
      const isTarget = true;
      const thunkAction = actions.handleSquareClicked(isTarget);

      thunkAction(mockDispatch, mockGetState, null);

      expect(mockDispatch).toHaveBeenCalledWith(actions.handleCorrectSquareClicked());
    });
    it('should dispatch handleIncorrectSquareClicked when isTarget is false', () => {
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn();
      const isTarget = false;
      const thunkAction = actions.handleSquareClicked(isTarget);

      thunkAction(mockDispatch, mockGetState, null);

      expect(mockDispatch).toHaveBeenCalledWith(actions.handleIncorrectSquareClicked());
    });
    it('should dispatch doneShowingPenalty after a timeout when isTarget is false', () => {
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn();
      const isTarget = false;
      const thunkAction = actions.handleSquareClicked(isTarget);

      thunkAction(mockDispatch, mockGetState, null);
      expect(mockDispatch).not.toHaveBeenCalledWith(actions.doneShowingPenalty());

      jest.runAllTimers();
      expect(mockDispatch).toHaveBeenCalledWith(actions.doneShowingPenalty());
    });
  });
  describe('startRound', () => {
    it('should reset the count to 0', () => {
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn();

      const thunkAction = actions.startRound();
      thunkAction(mockDispatch, mockGetState, null);

      expect(mockDispatch).toHaveBeenCalledWith(actions.resetCount());
    });
    it('should return a function that returns a Promise', () => {
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn();

      const thunkAction = actions.startRound();

      expect(thunkAction(mockDispatch, mockGetState, null)).toBeInstanceOf(Promise);
    });
    test('setRoundStartCountdownInterval sets up countdown, timer & interval', () => {
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn();
      const mockResolve = jest.fn();

      actions.setRoundStartCountdownInterval(mockDispatch, mockGetState, mockResolve);

      expect(mockDispatch).toHaveBeenCalledWith(
        actions.setCountdownValue(RoundStartCountdownSeconds)
      );
      expect(mockDispatch).toHaveBeenCalledWith(
        actions.setRoundTimerValue(RoundLengthSeconds)
      );
      expect(setInterval).toHaveBeenCalledTimes(1);
    });
    test('setRoundStartCountdownInterval counts down to the round start', () => {
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn().mockReturnValue({
        game: BaseGameState,
        leaderboard: {},
        settings: BaseSettingsState
      });
      const mockResolve = jest.fn();

      actions.setRoundStartCountdownInterval(mockDispatch, mockGetState, mockResolve);

      for (let i = RoundStartCountdownSeconds - 1; i > 0; i -= 1) {
        // Clear previous calls so we can calls per interval
        mockDispatch.mockClear();

        // Advance to the next interval
        jest.runOnlyPendingTimers();

        expect(mockDispatch).toHaveBeenCalledWith(actions.setCountdownValue(i));
      }

      // Final interval
      mockDispatch.mockClear();
      jest.runOnlyPendingTimers();
      expect(clearInterval).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenCalledWith(actions.startPlay());
    });
    test('setRoundTimerInterval initializes properly', () => {
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn().mockReturnValue({
        game: { timeLeftInRound: 30 } as GameState
      } as StoreState);
      const mockResolve = jest.fn();

      actions.setRoundTimerInterval(mockDispatch, mockGetState, mockResolve);

      expect(setInterval).toHaveBeenCalledTimes(1);
    });
  });
  test('setRoundTimerInterval counts down the round', () => {
    const mockDispatch = jest.fn();
    // timeRemaining of 1 causes the interval to execute twice:
    // once to just decrement the time remaining and the second time
    // to decrement the time, clear the interval, & end the round
    let timeRemaining = 1;
    const mockGetState = jest.fn().mockImplementation(() => {
      return {
        game: {
          ...BaseGameState,
          // tslint:disable-next-line:no-increment-decrement
          timeLeftInRound: timeRemaining--
        },
        leaderboard: {},
        settings: BaseSettingsState
      };
    }
    );
    const mockResolve = jest.fn();
    const decrementTimerBy1Second = actions.decrementRoundTimerValue(1);

    actions.setRoundTimerInterval(mockDispatch, mockGetState, mockResolve);

    // Execute the second last interval
    jest.runOnlyPendingTimers();
    expect(mockDispatch).toHaveBeenCalledWith(decrementTimerBy1Second);

    // Execute the last interval
    mockDispatch.mockClear();
    jest.runOnlyPendingTimers();
    expect(mockDispatch).toHaveBeenCalledWith(decrementTimerBy1Second);
    expect(clearInterval).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(actions.endRound());
    expect(mockResolve).toHaveBeenCalledTimes(1);
  });
});
