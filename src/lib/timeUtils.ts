import { ClockTime } from '../types';

export function clockTimeFromSeconds(seconds: number): ClockTime {
  const minutes = minutesFromSeconds(seconds);
  const secondsOnly = secondsUnder60(seconds, minutes);
  return {
    minutes,
    seconds: secondsOnly
  };
}

/**
 * Gets the number of full minutes in the given number of seconds.
 * @param seconds The total number of seconds in the time
 */
export function minutesFromSeconds(seconds: number): number {
  return Math.floor(seconds / 60);
}

/**
 * Gets the seconds component of clock time from a number of seconds (possibly >= 60)
 * representing that time.
 * @param seconds   The total number of seconds in the time
 * @param minutes   The number of full minutes in the full number of seconds
 */
export function secondsUnder60(seconds: number, minutes: number): number {
  return seconds - minutes * 60;
}
