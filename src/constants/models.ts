import { Rank, File, GameState, SettingsState } from '../types';

export const Ranks: Rank[] = [1, 2, 3, 4, 5, 6, 7, 8];
export const Files: File[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export const RoundStartCountdownSeconds = 3;
export const RoundLengthSeconds = 30;
export const TimePenaltySeconds = 3;
export const ShowPenaltyForMilliseconds = 500;

export const BaseGameState: GameState = Object.freeze({
  countdownValue: null,
  currentCoords: null,
  timeLeftInRound: RoundLengthSeconds,
  roundInProgress: false,
  count: 0
});

export const BaseSettingsState: SettingsState = Object.freeze({
  playAsBlack: false,
  lightSquareColor: '#eae1d7',
  darkSquareColor: '#353535'
});
