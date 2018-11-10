export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type File = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';

export type Coordinate = {
  rank: Rank,
  file: File
};

export interface StoreState {
  inGameLoop: boolean; // Whether a round is in progress
  coordsPerRound: number; // Number of challenges/correct clicks per round
  showingTimingResult: boolean; // Showing results of a round
  currentCoords?: Coordinate; // Coords currectly show & awaiting click on board
}
