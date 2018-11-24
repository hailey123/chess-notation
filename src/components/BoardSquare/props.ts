import { Coordinate } from 'src/types';

export type PropsPassedIn = {
  coordinate: Coordinate,
  color: string,
};

type PropsFromDispatch = {
  handleClickAtCoordinate: () => void
};

export type Props = PropsPassedIn & PropsFromDispatch;
