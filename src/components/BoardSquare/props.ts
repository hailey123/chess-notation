import { Coordinate } from '../../types';

export type PropsPassedIn = {
  coordinate: Coordinate,
  color: string
};

export type PropsFromState = {
  isTarget: boolean,
  roundInProgress: boolean
};

type PropsFromDispatch = {
  handleClickAtCoordinate: (isTarget: boolean) => void
};

export type Props = PropsPassedIn & PropsFromState & PropsFromDispatch;
