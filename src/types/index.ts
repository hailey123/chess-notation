export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

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
  coordsPerRound: number; // Number of coordinates displayed per round
  showingTimingResult: boolean; // Showing results of a round
  currentCoords: Coordinate | null; // Coords currently show & awaiting click on board
  timeLeftInRound: number;
}

export interface LeaderboardState { }

export interface SettingsState {
  playAsBlack?: boolean;
  lightSquareColor?: string;
  darkSquareColor?: string;
}

export interface StoreState {
  game: GameState;
  leaderboard: LeaderboardState;
  settings: SettingsState;
}
