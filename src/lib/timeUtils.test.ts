import { secondsUnder60, minutesFromSeconds } from './timeUtils';

describe('time utils', () => {
  describe('minutesFromSeconds', () => {
    test('returns the correct value when total seconds >= 60', () => {
      const totalSeconds = 70;
      const minutesInSeconds = 1;
      expect(minutesFromSeconds(totalSeconds)).toBe(minutesInSeconds);
    });
  });
  describe('secondsUnder60', () => {
    test('returns the correct value when total seconds >= 60', () => {
      const totalSeconds = 70;
      const minutesInSeconds = 1;
      const secondsWithoutMinutes = 10;
      expect(secondsUnder60(totalSeconds, minutesInSeconds)).toBe(secondsWithoutMinutes);
    });
  });
});
