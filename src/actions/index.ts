import {
  HandleSquareClicked,
  StartRound,
  SetCountdownValue,
  StartPlay,
  SetRoundTimerValue,
  EndRound,
  ResetCount,
  ToggleBoardDirection
} from './game';

export type Action = HandleSquareClicked
  | StartRound
  | SetCountdownValue
  | StartPlay
  | SetRoundTimerValue
  | EndRound
  | ResetCount
  | ToggleBoardDirection;

export * from './game';
