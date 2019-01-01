import { connect } from 'react-redux';

import StartButton from './StartButton';
import { startRound } from '../../actions';
import { PropsFromState } from './props';
import { StoreState } from '../../types';

export function mapStateToProps({ game }: StoreState): PropsFromState {
  return {
    enabled: !game.countdownValue && !game.roundInProgress
  };
}

export default connect(mapStateToProps, {
  startRound,
})(StartButton);
