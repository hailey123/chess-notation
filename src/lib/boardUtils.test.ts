import * as utils from './boardUtils';
import { Coordinate } from 'src/types';

describe('board utils', () => {
  const maxRandomInt = 1 - 1e-16;
  let coordinates: Coordinate;

  beforeAll(() => {
    coordinates = {
      file: 'G',
      rank: 8
    };
    Object.freeze(coordinates);
  });

  describe('getRandomInt', () => {
    const min = 4;
    const max = 10;

    it('returns the min value', () => {
      const mockRandom = jest.spyOn(Math, 'random').mockReturnValue(0);

      expect(utils.getRandomInt(min, max)).toBe(min);

      mockRandom.mockRestore();
    });
    it('returns the max value', () => {
      const mockRandom = jest.spyOn(Math, 'random').mockReturnValue(maxRandomInt);

      expect(utils.getRandomInt(min, max)).toBe(max);

      mockRandom.mockRestore();
    });
  });

  describe('generateNextValue', () => {
    let values: number[];

    beforeAll(() => {
      values = [15, 3, 7, 8, 95, 33, -3, 24];
      Object.freeze(values);
    });

    it('returns the first possible value', () => {
      const mockRandom = jest.spyOn(Math, 'random').mockReturnValue(0);

      expect(utils.generateNextValue(values)).toBe(values[0]);

      mockRandom.mockRestore();
    });
    it('returns the last possible value', () => {
      const mockRandom = jest.spyOn(Math, 'random').mockReturnValue(maxRandomInt);

      expect(utils.generateNextValue(values)).toBe(values[values.length - 1]);

      mockRandom.mockRestore();
    });
  });

  describe('coordinatesEqual', () => {
    it('recognizes equal coordinates', () => {
      expect(utils.coordinatesEqual(coordinates, {
        file: 'G',
        rank: 8
      })).toBeTruthy();
    });
    it('recognizes unequal files', () => {
      expect(utils.coordinatesEqual(coordinates, {
        file: 'A',
        rank: 8
      })).toBeFalsy();
    });
    it('recognizes unequal ranks', () => {
      expect(utils.coordinatesEqual(coordinates, {
        file: 'G',
        rank: 1
      })).toBeFalsy();
    });
  });

  describe('generateRandomCoordinates', () => {
    it('works when the last coordinates are not provided', () => {
      expect(utils.generateRandomCoords()).toBeDefined();
    });
    it('works when the last coordinates are provided', () => {
      const nextCoords = utils.generateRandomCoords(coordinates);

      expect(utils.coordinatesEqual(nextCoords, coordinates)).toBeFalsy();
    });
    it('works when the random generation must be repeated', () => {
      const lastCoordinates: Coordinate = {
        file: 'A',
        rank: 1
      };

      // This will cause nextCoords to equal lastCoordinates in the first pass thru,
      // thus triggering the while loop
      let times = 0;
      const mockRandom = jest.spyOn(Math, 'random').mockImplementation(() => {
        times += 1;
        if (times <= 2) {
          return 0;
        }
        return 1;
      });

      const nextCoords = utils.generateRandomCoords(lastCoordinates);

      expect(utils.coordinatesEqual(nextCoords, coordinates)).toBeFalsy();

      mockRandom.mockRestore();
    });
  });
});
