import {
  HandleSquareClicked,
  StartRound,
  SetCountdownValue,
  StartPlay,
  SetRoundTimerValue,
  EndRound,
  ResetCount,
  TimePenalty
} from './game';
import { ToggleBoardDirection } from './settings';

export type Action = HandleSquareClicked
  | StartRound
  | SetCountdownValue
  | StartPlay
  | SetRoundTimerValue
  | EndRound
  | ResetCount
  | ToggleBoardDirection
  | TimePenalty;

export * from './game';
export * from './settings';
