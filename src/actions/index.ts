import {
  HandleSquareClicked,
  StartRound,
  SetCountdownValue,
  StartPlay,
  SetRoundTimerValue,
  EndRound,
  ResetCount
} from './game';
import { ToggleBoardDirection } from './settings';

export type Action = HandleSquareClicked
  | StartRound
  | SetCountdownValue
  | StartPlay
  | SetRoundTimerValue
  | EndRound
  | ResetCount
  | ToggleBoardDirection;

export * from './game';
export * from './settings';
