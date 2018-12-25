import { connect } from 'react-redux';

import BoardSquare from './BoardSquare';
import { handleSquareClicked } from '../../actions';
import { PropsPassedIn } from './props';
import { StoreState } from '../../types';
import { coordinatesEqual } from '../../lib/boardUtils';

export function mapStateToProps({ game }: StoreState, ownProps: PropsPassedIn) {
  const targetCoords = game.currentCoords;
  return {
    isTarget: targetCoords && coordinatesEqual(targetCoords, ownProps.coordinate),
    roundInProgress: game.roundInProgress
  };
}

export default connect(mapStateToProps, {
  handleClickAtCoordinate: handleSquareClicked
})(BoardSquare);
