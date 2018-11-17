import { getRandomInt } from './boardUtils';

describe('board utils', () => {
  describe('getRandomInt', () => {
    const min = 4;
    const max = 10;

    it('should return the min value', () => {
      const mockRandom = jest.spyOn(Math, 'random').mockReturnValue(0);

      expect(getRandomInt(min, max)).toBe(min);

      mockRandom.mockRestore();
    });
    it('should return the max value', () => {
      const maxRandomInt = 1 - 1e-16;
      const mockRandom = jest.spyOn(Math, 'random').mockReturnValue(maxRandomInt);

      expect(getRandomInt(min, max)).toBe(max);

      mockRandom.mockRestore();
    });
  });
});
