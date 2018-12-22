import { connect } from 'react-redux';

import BoardSquare from './BoardSquare';
import { Dispatch } from 'react';
import { Action, handleSquareClicked } from '../../actions';
import { PropsPassedIn } from './props';
import { StoreState } from '../../types';
import { coordinatesEqual } from '../../lib/boardUtils';

export function mapStateToProps({ game }: StoreState, ownProps: PropsPassedIn) {
  const targetCoords = game.currentCoords;
  return { isTarget: targetCoords && coordinatesEqual(targetCoords, ownProps.coordinate) };
}

export function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    handleClickAtCoordinate: (isTarget: boolean) => { dispatch(handleSquareClicked(isTarget)); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardSquare);
