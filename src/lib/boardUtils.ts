import { Coordinate } from 'src/types';
import { ranks, files } from '../constants/models';

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

export function generateRandomCoords(lastCoordinates?: Coordinate): Coordinate {
  const nextRank = generateNextCoord(ranks, lastCoordinates ? lastCoordinates.rank : undefined);
  const nextFile = generateNextCoord(files, lastCoordinates ? lastCoordinates.file : undefined);

  return { rank: nextRank, file: nextFile };
}
