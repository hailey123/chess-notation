import {
  ShowNextCoords,
  HandleSquareClicked,
  StartRound,
  SetCountdownValue,
  StartPlay
} from './game';

export type Action = ShowNextCoords
  | HandleSquareClicked
  | StartRound
  | SetCountdownValue
  | StartPlay;

export * from './game';
