import * as constants from '../constants/actions';
import { StoreState } from '../types';
import { Dispatch, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Action } from '.';
import {
  RoundLengthSeconds,
  RoundStartCountdownSeconds,
  ShowPenaltyForMilliseconds
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
  return (dispatch: Dispatch, getState: () => StoreState) => {
    dispatch(resetCount());
    return new Promise((resolve) => {
      setRoundStartCountdownInterval(dispatch, getState, resolve);
    });
  };
}

export function setRoundStartCountdownInterval(
  dispatch: Dispatch<AnyAction>,
  getState: () => StoreState,
  resolve: (value?: void | PromiseLike<void> | undefined) => void
) {
  let roundStartCountdownValue = RoundStartCountdownSeconds;
  dispatch(setCountdownValue(roundStartCountdownValue));
  dispatch(setRoundTimerValue(RoundLengthSeconds));
  const msPerRoundStartCountdownCount = 1000;

  const roundStartCountdownClockInterval = setInterval(() => {
    roundStartCountdownValue -= 1;
    if (roundStartCountdownValue > 0) {
      dispatch(setCountdownValue(roundStartCountdownValue));
    } else {
      clearInterval(roundStartCountdownClockInterval);
      dispatch(startPlay());
      setRoundTimerInterval(dispatch, getState, resolve);
    }
  },                                                   msPerRoundStartCountdownCount);
}

export function setRoundTimerInterval(
  dispatch: Dispatch<AnyAction>,
  getState: () => StoreState,
  resolve: (value?: void | PromiseLike<void> | undefined) => void
) {
  const oneSecond = 1;
  const roundTimerInterval = setInterval(() => {
    dispatch(decrementRoundTimerValue(oneSecond));

    if (getState().game.timeLeftInRound <= 0) {
      clearInterval(roundTimerInterval);
      dispatch(endRound());
      resolve();
    }
  },                                     oneSecond * 1000);
}
