import { connect } from 'react-redux';

import PlayAsControl from './PlayAsControl';
import { StoreState } from '../../types';
import { PropsFromState } from './props';
import { toggleBoardDirection } from '../../actions';

export function mapStateToProps({ game, settings }: StoreState): PropsFromState {
  return {
    playAsBlack: settings.playAsBlack,
    enabled: !game.countdownValue && !game.roundInProgress
  };
}

export default connect(mapStateToProps, {
  toggleBoardDirection
})(PlayAsControl);
