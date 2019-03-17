import { connect } from 'react-redux';

import NotationInstruction from './NotationInstruction';
import { StoreState } from '../../types';
import { getCurrentCoordinate } from '../../selectors';
import { PropsFromState } from './props';

export function mapStateToProps(state: StoreState): PropsFromState {
  return {
    currentCoords: getCurrentCoordinate(state)
  };
}

export default connect(mapStateToProps)(NotationInstruction);
