import { CoordsIndicatorAction } from '../actions';
import { StoreState, Coordinate } from '../types';
import { SHOW_NEXT_COORDS, HANDLE_CLICK, files, ranks } from '../constants';

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

export function enthusiasm(state: StoreState, action: CoordsIndicatorAction): StoreState {
  switch (action.type) {
    case SHOW_NEXT_COORDS:
      const nextCoords = generateRandomCoords(state.currentCoords);
      return { ...state, currentCoords: nextCoords };
    case HANDLE_CLICK:
      // TODO: handle clicking on a particular square
      // Either show the next coords or end the round
      return { ...state };
  }
  return state;
}
