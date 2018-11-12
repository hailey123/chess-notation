import { Coordinate } from 'src/types';

export type PropsPassedIn = {
  coordinate: Coordinate,
  color: string,
};

export type PropsFromDispatch = {
  handleClickAtCoordinate: () => void
};
