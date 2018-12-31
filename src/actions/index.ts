import {
  HandleCorrectSquareClicked,
  HandleIncorrectSquareClicked,
  DoneShowingPenalty,
  StartRound,
  SetCountdownValue,
  StartPlay,
  SetRoundTimerValue,
  DecrementRoundTimerValue,
  EndRound,
  ResetCount
} from './game';
import { ToggleBoardDirection } from './settings';

export type Action = HandleCorrectSquareClicked
  | HandleIncorrectSquareClicked
  | DoneShowingPenalty
  | StartRound
  | SetCountdownValue
  | StartPlay
  | SetRoundTimerValue
  | DecrementRoundTimerValue
  | EndRound
  | ResetCount
  | ToggleBoardDirection;

export * from './game';
export * from './settings';
