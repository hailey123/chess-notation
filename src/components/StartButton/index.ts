import { connect } from 'react-redux';

import StartButton from './StartButton';
import { startRound } from '../../actions';
import { PropsFromState } from './props';
import { StoreState } from '../../types';
import { getRoundNotStarted } from '../../selectors';

export function mapStateToProps(state: StoreState): PropsFromState {
  return {
    enabled: getRoundNotStarted(state)
  };
}

export default connect(mapStateToProps, {
  startRound,
})(StartButton);
