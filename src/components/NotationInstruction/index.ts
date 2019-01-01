import { connect } from 'react-redux';

import NotationInstruction from './NotationInstruction';
import { StoreState } from '../../types';
import { getCurrentCoordinate } from '../../selectors';

export function mapStateToProps(state: StoreState) {
  return {
    currentCoords: getCurrentCoordinate(state)
  };
}

export default connect(mapStateToProps)(NotationInstruction);
