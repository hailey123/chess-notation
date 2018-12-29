import { ChessPlayer } from '../../types';

type PropsFromState = {
  playAs: ChessPlayer
};

type PropsFromDispatch = {
  onClick: () => void
};

export type Prop = PropsFromState & PropsFromDispatch;
