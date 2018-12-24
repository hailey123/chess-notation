import { clockTimeFromSeconds, minutesFromSeconds, secondsUnder60 } from './timeUtils';
import { ClockTime } from '../types';

describe('time utils', () => {
  test('returns the correct value when total seconds >= 60', () => {
    const totalSeconds = 70;
    const expectedClockTime: ClockTime = {
      minutes: 1,
      seconds: 10
    };

    expect(clockTimeFromSeconds(totalSeconds)).toEqual(expectedClockTime);
  });
  test('returns the correct value when total seconds >= 60', () => {
    const totalSeconds = 70;
    const expectedMinutesInSeconds = 1;

    expect(minutesFromSeconds(totalSeconds)).toBe(expectedMinutesInSeconds);
  });
  test('returns the correct value when total seconds >= 60', () => {
    const totalSeconds = 70;
    const minutesInSeconds = 1;
    const expectedSecondsWithoutMinutes = 10;

    expect(secondsUnder60(totalSeconds, minutesInSeconds)).toBe(expectedSecondsWithoutMinutes);
  });
});
