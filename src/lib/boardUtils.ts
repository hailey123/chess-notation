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
  const maxCoordIndex = possibleValues.length - 1;
  return possibleValues[getRandomInt(0, maxCoordIndex)];
}

export function coordinatesEqual(coord1: Coordinate, coord2: Coordinate) {
  return coord1.rank === coord2.rank && coord1.file === coord2.file;
}

/**
 * Generates the next set of valid board coordinates.
 * @param lastCoordinates previous coordinates, which the new coordinates should not equal
 */
export function generateRandomCoords(lastCoordinates?: Coordinate): Coordinate {
  const nextCoords = { rank: generateNextValue(ranks), file: generateNextValue(files) };

  if (!lastCoordinates) {
    return nextCoords;
  }

  while (coordinatesEqual(nextCoords, lastCoordinates)) {
    nextCoords.rank = generateNextValue(ranks);
    nextCoords.file = generateNextValue(files);
  }

  return nextCoords;
}
