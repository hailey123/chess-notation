import { connect } from 'react-redux';

import RoundCountdown from './RoundCountdown';
import { StoreState } from '../../types';
import { getTimeLeftInRound, getShowingPenalty } from '../../selectors';
import { PropsFromState } from './props';

export function mapStateToProps(state: StoreState): PropsFromState {
  return {
    secondsRemaining: getTimeLeftInRound(state),
    showingPenalty: getShowingPenalty(state)
  };
}

export default connect(mapStateToProps)(RoundCountdown);
