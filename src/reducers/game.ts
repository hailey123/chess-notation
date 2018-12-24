import { Action } from '../actions';
import { GameState } from '../types';
import {
  SHOW_NEXT_COORDS,
  HANDLE_SQUARE_CLICKED,
  SET_COUNTDOWN_VALUE,
  START_PLAY,
  END_ROUND,
  SET_ROUND_TIMER_VALUE
} from '../constants/actions';
import { generateRandomCoords } from '../lib/boardUtils';

export default function game(
  state: GameState = {
    countdownValue: null,
    coordsPerRound: 8,
    showingTimingResult: false,
    currentCoords: null,
    timeLeftInRound: null
  },
  action: Action): GameState {
  switch (action.type) {
    case SHOW_NEXT_COORDS:
      const nextCoords = generateRandomCoords(state.currentCoords);
      return { ...state, currentCoords: nextCoords };
    case HANDLE_SQUARE_CLICKED:
      if (action.isTarget) {
        return { ...state, currentCoords: generateRandomCoords(state.currentCoords) };
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
        currentCoords: generateRandomCoords(),
        timeLeftInRound: 5 // TODO: extract constant, make an app setting
      };
    case SET_ROUND_TIMER_VALUE:
      return {
        ...state,
        timeLeftInRound: action.value
      };
    case END_ROUND:
      return {
        ...state,
        timeLeftInRound: null
      };
  }
  return state;
}
