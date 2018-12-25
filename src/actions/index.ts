import {
  ShowNextCoords,
  HandleSquareClicked,
  StartRound,
  SetCountdownValue,
  StartPlay,
  SetRoundTimerValue,
  EndRound,
  ResetCount
} from './game';

export type Action = ShowNextCoords
  | HandleSquareClicked
  | StartRound
  | SetCountdownValue
  | StartPlay
  | SetRoundTimerValue
  | EndRound
  | ResetCount;

export * from './game';
