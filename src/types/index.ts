export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export type Coordinate = {
  rank: Rank,
  file: File
};

export interface GameState {
  inGameLoop: boolean; // Whether a round is in progress
  coordsPerRound: number; // Number of coordinates displayed per roundee
  showingTimingResult: boolean; // Showing results of a round
  currentCoords?: Coordinate; // Coords currectly show & awaiting click on board
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
