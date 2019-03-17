import { connect } from 'react-redux';

import BoardSquare from './BoardSquare';
import { handleSquareClicked } from '../../actions';
import { PropsFromState, PropsPassedIn } from './props';
import { StoreState } from '../../types';
import { makeGetIsTargetSquare, getRoundInProgress } from '../../selectors';

export function mapStateToProps(
  state: StoreState,
  ownProps: PropsPassedIn
): PropsFromState {
  const getIsTargetSquare = makeGetIsTargetSquare(ownProps);
  return {
    isTarget: getIsTargetSquare(state),
    roundInProgress: getRoundInProgress(state)
  };
}

export default connect(mapStateToProps, {
  handleClickAtCoordinate: handleSquareClicked
})(BoardSquare);
