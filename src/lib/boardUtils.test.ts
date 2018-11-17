import * as utils from './boardUtils';
import { Coordinate } from 'src/types';

describe('board utils', () => {
  const maxRandomInt = 1 - 1e-16;

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
    let coordinates: Coordinate;

    beforeAll(() => {
      coordinates = {
        file: 'G',
        rank: 8
      };
      Object.freeze(coordinates);
    });

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
});
