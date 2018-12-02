import * as constants from '../constants/actions';
import { Coordinate, StoreState } from 'src/types';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Action } from '.';

export interface ShowNextCoords {
  type: constants.SHOW_NEXT_COORDS;
}

export interface HandleSquareClicked {
  type: constants.HANDLE_SQUARE_CLICKED;
  square: Coordinate;
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

export function showNextCoords(): ShowNextCoords {
  return {
    type: constants.SHOW_NEXT_COORDS
  };
}

export function handleSquareClicked(coordinate: Coordinate): HandleSquareClicked {
  return {
    type: constants.HANDLE_SQUARE_CLICKED,
    square: coordinate
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

export function startRound(): ThunkAction<Promise<void>, StoreState, null, Action> {
  return (dispatch: Dispatch) => {
    let countdownValue = 3;
    dispatch(setCountdownValue(countdownValue));
    return new Promise((resolve) => {
      const msPerCount = 500;

      const interval = setInterval(() => {
        countdownValue -= 1;
        if (countdownValue > 0) {
          dispatch(setCountdownValue(countdownValue));
        } else {
          dispatch(startPlay());
          clearInterval(interval);
          resolve();
        }
      },                           msPerCount);
    });
  };
}
