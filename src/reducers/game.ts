import { Action } from '../actions';
import { GameState } from '../types';
import { SHOW_NEXT_COORDS, HANDLE_SQUARE_CLICKED, START_ROUND } from '../constants/actions';
import { generateRandomCoords } from '../lib/boardUtils';

export default function game(
  state: GameState = {
    countingDown: false,
    inGameLoop: false,
    coordsPerRound: 8,
    showingTimingResult: false,
    currentCoords: { file: 'F', rank: 3 }
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
    case START_ROUND: {
      return { ...state, countingDown: true };
    }
  }
  return state;
}
