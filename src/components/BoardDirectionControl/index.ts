import { connect } from 'react-redux';

import BoardDirectionControl from './BoardDirectionControl';
import { StoreState } from '../../types';
import { PropsFromState } from './props';
import { toggleBoardDirection } from '../../actions';
import { getPlayAsBlack, getRoundNotStarted } from '../../selectors';

export function mapStateToProps(state: StoreState): PropsFromState {
  return {
    playAsBlack: getPlayAsBlack(state),
    enabled: getRoundNotStarted(state)
  };
}

export default connect(mapStateToProps, {
  toggleBoardDirection
})(BoardDirectionControl);
