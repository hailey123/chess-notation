import * as constants from '../constants/actions';
import { StoreState } from '../types';
import { Dispatch } from 'redux';
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
    let roundStartCountdownValue = 3;
    dispatch(setCountdownValue(roundStartCountdownValue));
    return new Promise((resolve, reject) => {
      const msPerRoundStartCountdownCount = 1000;

      const countdownClockInterval = setInterval(() => {
        roundStartCountdownValue -= 1;
        if (roundStartCountdownValue > 0) {
          dispatch(setCountdownValue(roundStartCountdownValue));
        } else {
          clearInterval(countdownClockInterval);
          dispatch(startPlay());

          const timeLeftInRound = getState().game.timeLeftInRound;
          if (timeLeftInRound === null) {
            return reject('Round countdown time was unexpectedly null');
          }

          let timeLeftInRoundNonNull: number = <number>timeLeftInRound;
          const msPerRoundClockCount = 1000;

          const roundClockInterval = setInterval(() => {
            timeLeftInRoundNonNull -= 1;
            if (timeLeftInRoundNonNull >= 0) {
              dispatch(setRoundTimerValue(timeLeftInRoundNonNull));
            } else {
              dispatch(endRound());
              clearInterval(roundClockInterval);
              resolve();
            }
          },                                     msPerRoundClockCount);
        }
      },                                         msPerRoundStartCountdownCount);
    });
  };
}
