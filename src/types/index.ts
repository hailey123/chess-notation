export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export type PlayerColor = 'White' | 'Black';

export type Coordinate = {
  rank: Rank,
  file: File
};

export type ClockTime = {
  minutes: number,
  seconds: number
};

export interface GameState {
  countdownValue: number | null;
  currentCoords: Coordinate | null;
  timeLeftInRound: number;
  roundInProgress: boolean;
  count: number;
}

export interface LeaderboardState { }

export interface SettingsState {
  playAsBlack: boolean;
  lightSquareColor?: string;
  darkSquareColor?: string;
}

export interface StoreState {
  game: GameState;
  leaderboard: LeaderboardState;
  settings: SettingsState;
}
