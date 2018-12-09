import { Action } from '../actions';
import { GameState } from '../types';
import {
  SHOW_NEXT_COORDS,
  HANDLE_SQUARE_CLICKED,
  SET_COUNTDOWN_VALUE,
  START_PLAY
} from '../constants/actions';
import { generateRandomCoords } from '../lib/boardUtils';

export default function game(
  state: GameState = {
    countdownValue: null,
    inGameLoop: false,
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
      // TODO: Fix, as this is not the desired behavior. Currently just updating the
      // coordinate in the instruction so we can see something's happening.
      return { ...state, currentCoords: action.square };
    case SET_COUNTDOWN_VALUE:
      return { ...state, countdownValue: action.value };
    case START_PLAY:
      // TODO: other stuff?
      return { ...state, countdownValue: null };
  }
  return state;
}
