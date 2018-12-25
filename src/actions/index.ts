import {
  HandleSquareClicked,
  StartRound,
  SetCountdownValue,
  StartPlay,
  SetRoundTimerValue,
  EndRound,
  ResetCount
} from './game';

export type Action = HandleSquareClicked
  | StartRound
  | SetCountdownValue
  | StartPlay
  | SetRoundTimerValue
  | EndRound
  | ResetCount;

export * from './game';
