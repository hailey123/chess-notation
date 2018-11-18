import { Coordinate } from 'src/types';
import { ranks, files } from '../constants/models';

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a random value from the given list of values.
 * @param possibleValues list of all valid values
 */
export function generateNextValue<T>(possibleValues: T[]): T {
  const maxCoordinateIndex = possibleValues.length - 1;
  return possibleValues[getRandomInt(0, maxCoordinateIndex)];
}

export function coordinatesEqual(coordinate1: Coordinate, coordinate2: Coordinate) {
  return coordinate1.rank === coordinate2.rank && coordinate1.file === coordinate2.file;
}

/**
 * Generates the next set of valid board coordinates.
 * @param lastCoords previous coordinates, which the new coordinates should not equal
 */
export function generateRandomCoords(lastCoords?: Coordinate): Coordinate {
  const nextCoords = { rank: generateNextValue(ranks), file: generateNextValue(files) };

  if (!lastCoords) {
    return nextCoords;
  }

  while (coordinatesEqual(nextCoords, lastCoords)) {
    nextCoords.rank = generateNextValue(ranks);
    nextCoords.file = generateNextValue(files);
  }

  return nextCoords;
}
