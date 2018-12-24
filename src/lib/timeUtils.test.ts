import {
  clockTimeFromSeconds,
  minutesFromSeconds,
  secondsUnder60,
  clockTimeToString
} from './timeUtils';
import { ClockTime } from '../types';

describe('time utils', () => {
  describe('clockTimeFromSeconds', () => {
    it('returns the correct value when total seconds >= 60', () => {
      const totalSeconds = 70;
      const expectedClockTime: ClockTime = {
        minutes: 1,
        seconds: 10
      };

      expect(clockTimeFromSeconds(totalSeconds)).toEqual(expectedClockTime);
    });
  });

  describe('minutesFromSeconds', () => {
    it('returns the correct value when total seconds >= 60', () => {
      const totalSeconds = 70;
      const expectedMinutesInSeconds = 1;

      expect(minutesFromSeconds(totalSeconds)).toBe(expectedMinutesInSeconds);
    });
  });

  describe('secondsUnder60', () => {
    it('returns the correct value when total seconds >= 60', () => {
      const totalSeconds = 70;
      const minutesInSeconds = 1;
      const expectedSecondsWithoutMinutes = 10;

      expect(secondsUnder60(totalSeconds, minutesInSeconds)).toBe(expectedSecondsWithoutMinutes);
    });
  });

  describe('clockTimeToString', () => {
    it('formats time < 1 minute', () => {
      const clockTime: ClockTime = {
        minutes: 0,
        seconds: 45
      };
      const expectedString = '0:45';

      expect(clockTimeToString(clockTime)).toBe(expectedString);
    });
    it('formats time with seconds < 10', () => {
      const clockTime: ClockTime = {
        minutes: 1,
        seconds: 5
      };
      const expectedString = '1:05';

      expect(clockTimeToString(clockTime)).toBe(expectedString);
    });
    it('formats time > 1 minute', () => {
      const clockTime: ClockTime = {
        minutes: 1,
        seconds: 50
      };
      const expectedString = '1:50';

      expect(clockTimeToString(clockTime)).toBe(expectedString);
    });
  });
});
