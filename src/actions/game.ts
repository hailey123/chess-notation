import * as constants from '../constants/actions';
import { StoreState } from '../types';
import { Dispatch, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Action } from '.';
import {
  RoundLengthSeconds,
  RoundStartCountdownSeconds,
  ShowPenaltyForMilliseconds,
  OneSecondInMs as MsPerSecond
} from '../constants/models';

export interface HandleCorrectSquareClicked {
  type: constants.HANDLE_CORRECT_SQUARE_CLICKED;
}

export interface HandleIncorrectSquareClicked {
  type: constants.HANDLE_INCORRECT_SQUARE_CLICKED;
}

export interface DoneShowingPenalty {
  type: constants.DONE_SHOWING_PENALTY;
}

export interface StartRound {
  type: constants.START_ROUND;
}

export interface SetCountdownValue {
  type: constants.SET_COUNTDOWN_VALUE;
  value: number;
}

export interface StartPlay {
  type: constants.START_PLAY;
}

export interface SetRoundTimerValue {
  type: constants.SET_ROUND_TIMER_VALUE;
  value: number;
}

export interface DecrementRoundTimerValue {
  type: constants.DECREMENT_ROUND_TIMER_VALUE;
  value: number;
}

export interface EndRound {
  type: constants.END_ROUND;
}

export interface ResetCount {
  type: constants.RESET_COUNT;
}

export function setCountdownValue(value: number): SetCountdownValue {
  return {
    value,
    type: constants.SET_COUNTDOWN_VALUE
  };
}

export function startPlay(): StartPlay {
  return {
    type: constants.START_PLAY
  };
}

export function setRoundTimerValue(value: number): SetRoundTimerValue {
  return {
    value,
    type: constants.SET_ROUND_TIMER_VALUE
  };
}

export function decrementRoundTimerValue(value: number): DecrementRoundTimerValue {
  return {
    value,
    type: constants.DECREMENT_ROUND_TIMER_VALUE
  };
}

export function endRound(): EndRound {
  return {
    type: constants.END_ROUND
  };
}

export function resetCount(): ResetCount {
  return {
    type: constants.RESET_COUNT
  };
}

export function handleCorrectSquareClicked(): HandleCorrectSquareClicked {
  return {
    type: constants.HANDLE_CORRECT_SQUARE_CLICKED
  };
}

export function handleIncorrectSquareClicked(): HandleIncorrectSquareClicked {
  return {
    type: constants.HANDLE_INCORRECT_SQUARE_CLICKED
  };
}

export function doneShowingPenalty(): DoneShowingPenalty {
  return {
    type: constants.DONE_SHOWING_PENALTY
  };
}

export function handleSquareClicked(
  isTarget: boolean
): ThunkAction<Promise<void>, StoreState, null, Action> {
  return (dispatch: Dispatch) => {
    if (isTarget) {
      dispatch(handleCorrectSquareClicked());
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      dispatch(handleIncorrectSquareClicked());
      setTimeout(() => {
        dispatch(doneShowingPenalty());
        resolve();
      },         ShowPenaltyForMilliseconds);
    });
  };
}

export function startRound(): ThunkAction<Promise<void>, StoreState, null, Action> {
  return async (dispatch: Dispatch, getState: () => StoreState) => {
    dispatch(resetCount());

    await runStartCountdown(dispatch);
    dispatch(startPlay());

    await runRoundTimer(dispatch, getState);
    dispatch(endRound());
  };
}
/**
 * Counts down to the start of the round using an interval.
 * @param dispatch store dispatch function
 * @returns a promise that resolves when the round should start
 */
export function runStartCountdown(dispatch: Dispatch<AnyAction>): Promise<void> {
  return new Promise(resolve => {
    let roundStartCountdownValue = RoundStartCountdownSeconds;
    dispatch(setCountdownValue(roundStartCountdownValue));
    dispatch(setRoundTimerValue(RoundLengthSeconds));

    const roundStartCountdownClockInterval = setInterval(() => {
      roundStartCountdownValue -= 1;
      if (roundStartCountdownValue > 0) {
        dispatch(setCountdownValue(roundStartCountdownValue));
      } else {
        clearInterval(roundStartCountdownClockInterval);
        resolve();
      }
    },                                                   MsPerSecond);
  });
}

/**
 * Counts down the current round of play using an interval.
 * @param dispatch store dispatch function
 * @param getState store getState method
 * @returns a promise that resolves when there is no more time in the round
 */
export function runRoundTimer(
  dispatch: Dispatch<AnyAction>,
  getState: () => StoreState
): Promise<void> {
  const oneSecond = 1;
  return new Promise(resolve => {
    const roundTimerInterval = setInterval(() => {
      dispatch(decrementRoundTimerValue(oneSecond));

      if (getState().game.timeLeftInRound <= 0) {
        clearInterval(roundTimerInterval);
        resolve();
      }
    },                                     MsPerSecond);
  });
}
