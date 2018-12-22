import { Action } from '../actions';
import { GameState } from '../types';
import {
  SHOW_NEXT_COORDS,
  HANDLE_SQUARE_CLICKED,
  SET_COUNTDOWN_VALUE,
  START_PLAY
} from '../constants/actions';
import { generateRandomCoords, coordinatesEqual } from '../lib/boardUtils';

export default function game(
  state: GameState = {
    countdownValue: null,
    coordsPerRound: 8,
    showingTimingResult: false,
    currentCoords: null
  },
  action: Action): GameState {
  switch (action.type) {
    case SHOW_NEXT_COORDS:
      const nextCoords = generateRandomCoords(state.currentCoords);
      return { ...state, currentCoords: nextCoords };
    case HANDLE_SQUARE_CLICKED:
      const clickedSquare = action.square;
      const currentSquare = state.currentCoords;
      if (currentSquare && coordinatesEqual(clickedSquare, currentSquare)) {
        return { ...state, currentCoords: generateRandomCoords() };
      }
      break;
    case SET_COUNTDOWN_VALUE:
      return {
        ...state,
        countdownValue: action.value,
        currentCoords: null
      };
    case START_PLAY:
      return {
        ...state,
        countdownValue: null,
        currentCoords: generateRandomCoords()
      };
  }
  return state;
}
