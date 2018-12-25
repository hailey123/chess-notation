import { Action } from '../actions';
import { GameState } from '../types';
import {
  HANDLE_SQUARE_CLICKED,
  SET_COUNTDOWN_VALUE,
  START_PLAY,
  END_ROUND,
  SET_ROUND_TIMER_VALUE,
  RESET_COUNT
} from '../constants/actions';
import { generateRandomCoords } from '../lib/boardUtils';
import { BaseGameState } from '../constants/models';

export default function game(
  state: GameState = BaseGameState,
  action: Action): GameState {
  switch (action.type) {
    case HANDLE_SQUARE_CLICKED:
      if (action.isTarget) {
        return {
          ...state,
          currentCoords: generateRandomCoords(state.currentCoords),
          count: state.count + 1
        };
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
        roundInProgress: true,
        countdownValue: null,
        currentCoords: generateRandomCoords()
      };
    case SET_ROUND_TIMER_VALUE:
      return {
        ...state,
        timeLeftInRound: action.value
      };
    case END_ROUND:
      return {
        ...state,
        roundInProgress: false,
        timeLeftInRound: 0
      };
    case RESET_COUNT:
      return {
        ...state,
        count: 0
      };
  }
  return state;
}
