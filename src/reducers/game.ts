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
import { RoundLengthSeconds } from '../constants/models';

export default function game(
  state: GameState = {
    countdownValue: null,
    coordsPerRound: 8,
    showingTimingResult: false,
    currentCoords: null,
    timeLeftInRound: RoundLengthSeconds
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
        currentCoords: generateRandomCoords()
      };
    case SET_ROUND_TIMER_VALUE:
      return {
        ...state,
        timeLeftInRound: action.value
      };
    case END_ROUND:
      // TODO: more to do here?
      return state;
  }
  return state;
}
