import { connect } from 'react-redux';

import BoardDirectionControl from './BoardDirectionControl';
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
})(BoardDirectionControl);
