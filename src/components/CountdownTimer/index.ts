import { connect } from 'react-redux';

import CountdownTimer from './CountdownTimer';
import { StoreState } from '../../types';

export function mapStateToProps({ game }: StoreState) {
  return { secondsRemaining: game.currentCoords ? 60 : -1 };
}

export default connect(mapStateToProps)(CountdownTimer);
