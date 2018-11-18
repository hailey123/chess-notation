import * as utils from './boardUtils';
import { Coordinate } from 'src/types';
import { files, ranks } from '../constants/models';

describe('board utils', () => {
  const maxMathRandom = 1 - 1e-16;
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
      const mockRandom = jest.spyOn(Math, 'random').mockReturnValue(maxMathRandom);

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
      const mockRandom = jest.spyOn(Math, 'random').mockReturnValue(maxMathRandom);

      expect(utils.generateNextValue(values)).toBe(values[values.length - 1]);

      mockRandom.mockRestore();
    });
  });

  describe('coordinatesEqual', () => {
    it('recognizes equal coordinates', () => {
      expect(utils.coordinatesEqual(coordinates, {
        file: coordinates.file,
        rank: coordinates.rank
      })).toBeTruthy();
    });
    it('recognizes unequal files', () => {
      const fileIndex = (files.indexOf(coordinates.file) + 1) % files.length;
      const file = files[fileIndex];

      expect(utils.coordinatesEqual(coordinates, {
        file,
        rank: coordinates.rank
      })).toBeFalsy();
    });
    it('recognizes unequal ranks', () => {
      const rankIndex = (ranks.indexOf(coordinates.rank) + 1) % ranks.length;
      const rank = ranks[rankIndex];

      expect(utils.coordinatesEqual(coordinates, {
        rank,
        file: coordinates.file
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
    it('works when random generation initially gives values the same as the previous', () => {
      const initialRankOrFileIndex = 0;
      const lastCoords: Coordinate = {
        file: files[initialRankOrFileIndex],
        rank: ranks[initialRankOrFileIndex]
      };
      let mockCallCount = 0;
      const mockFor = 2;
      const mockRandom = jest.spyOn(Math, 'random').mockImplementation(() => {
        mockCallCount += 1;
        if (mockCallCount <= mockFor) {
          // This will cause the generated nextCoords to equal lastCoords in
          // generateRandomCoords, thus triggering execution of the while loop
          return initialRankOrFileIndex;
        }

        return initialRankOrFileIndex + 1;
      });

      const nextCoords = utils.generateRandomCoords(lastCoords);

      expect(utils.coordinatesEqual(nextCoords, coordinates)).toBeFalsy();

      mockRandom.mockRestore();
    });
  });
});
