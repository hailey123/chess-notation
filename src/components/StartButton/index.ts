import { connect } from 'react-redux';

import StartButton from './StartButton';
import { startRound } from '../../actions';
import { PropsFromState } from './props';
import { StoreState } from '../../types';
import { getRoundInitiated } from '../../selectors';

export function mapStateToProps(state: StoreState): PropsFromState {
  return {
    enabled: getRoundInitiated(state)
  };
}

export default connect(mapStateToProps, {
  startRound,
})(StartButton);
