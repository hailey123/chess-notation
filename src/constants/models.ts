import { Rank, File, GameState } from '../types';

export const Ranks: Rank[] = [1, 2, 3, 4, 5, 6, 7, 8];
export const Files: File[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export const RoundStartCountdownSeconds = 3;
export const RoundLengthSeconds = 30;

export const BaseGameState: GameState = Object.freeze({
  countdownValue: null,
  currentCoords: null,
  timeLeftInRound: RoundLengthSeconds,
  roundInProgress: false,
  count: 0
});
