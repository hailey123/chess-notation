import { Action } from '../actions';
import { GameState, Coordinate } from '../types';
import { files, ranks } from '../constants/models';
import { SHOW_NEXT_COORDS, HANDLE_SQUARE_CLICKED } from '../constants/actions';

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNextCoord<T>(possibleCoords: T[], currentCoord?: T): T {
  const maxCoordIndex = possibleCoords.length - 1;
  let nextCoord = possibleCoords[getRandomInt(0, maxCoordIndex)];
  while (nextCoord === currentCoord) {
    nextCoord = possibleCoords[getRandomInt(0, maxCoordIndex)];
  }
  return nextCoord;
}

function generateRandomCoords(lastCoordinates?: Coordinate): Coordinate {
  const nextRank = generateNextCoord(ranks, lastCoordinates ? lastCoordinates.rank : undefined);
  const nextFile = generateNextCoord(files, lastCoordinates ? lastCoordinates.file : undefined);

  return { rank: nextRank, file: nextFile };
}

export default function game(
  state: GameState = {
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
      // TODO: Fix, as this is not the desired behaviour. Currently just updating the
      // coordinate in the instruction so we can see something's happening.
      return { ...state, currentCoords: action.square };
  }
  return state;
}
