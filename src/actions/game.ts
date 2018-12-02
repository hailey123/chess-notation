import * as constants from '../constants/actions';
import { Coordinate } from 'src/types';

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

export function startRound() {
  return {
    type: constants.START_ROUND
  };
}
