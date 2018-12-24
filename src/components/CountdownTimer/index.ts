import { connect } from 'react-redux';

import CountdownTimer from './CountdownTimer';
import { StoreState } from '../../types';

export function mapStateToProps({ game }: StoreState) {
  return { secondsRemaining: game.timeLeftInRound };
}

export default connect(mapStateToProps)(CountdownTimer);
