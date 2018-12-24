import * as constants from '../constants/actions';
import { StoreState } from '../types';
import { Dispatch, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Action } from '.';

export interface ShowNextCoords {
  type: constants.SHOW_NEXT_COORDS;
}

export interface HandleSquareClicked {
  type: constants.HANDLE_SQUARE_CLICKED;
  isTarget: boolean;
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

export interface EndRound {
  type: constants.END_ROUND;
}

export function showNextCoords(): ShowNextCoords {
  return {
    type: constants.SHOW_NEXT_COORDS
  };
}

export function handleSquareClicked(isTarget: boolean): HandleSquareClicked {
  return {
    isTarget,
    type: constants.HANDLE_SQUARE_CLICKED
  };
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

export function endRound(): EndRound {
  return {
    type: constants.END_ROUND
  };
}

export function startRound(): ThunkAction<Promise<void>, StoreState, null, Action> {
  return (dispatch: Dispatch, getState: () => StoreState) => {
    return new Promise((resolve) => {
      setRoundStartCountdownInterval(dispatch, getState, resolve);
    });
  };
}

function setRoundStartCountdownInterval(
  dispatch: Dispatch<AnyAction>,
  getState: () => StoreState,
  resolve: (value?: void | PromiseLike<void> | undefined) => void
) {
  let roundStartCountdownValue = 3;
  dispatch(setCountdownValue(roundStartCountdownValue));
  dispatch(setRoundTimerValue(5));
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

function setRoundTimerInterval(
  dispatch: Dispatch<AnyAction>,
  getState: () => StoreState,
  resolve: (value?: void | PromiseLike<void> | undefined) => void
) {
  let timeLeftInRound = getState().game.timeLeftInRound;
  const msPerRoundClockCount = 1000;

  const roundTimerInterval = setInterval(() => {
    timeLeftInRound -= 1;
    if (timeLeftInRound > 0) {
      dispatch(setRoundTimerValue(timeLeftInRound));
    } else {
      clearInterval(roundTimerInterval);
      dispatch(endRound());
      resolve();
    }
  },                                     msPerRoundClockCount);
}
