import { connect } from 'react-redux';

import RoundCountdown from './RoundCountdown';
import { StoreState } from '../../types';

export function mapStateToProps({ game }: StoreState) {
  return { secondsRemaining: game.timeLeftInRound };
}

export default connect(mapStateToProps)(RoundCountdown);
