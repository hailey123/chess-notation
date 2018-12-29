import { connect } from 'react-redux';

import PlayAsControl from './PlayAsControl';
import { StoreState } from '../../types';
import { PropsFromState } from './props';
import { toggleBoardDirection } from '../../actions';

export function mapStateToProps({ settings }: StoreState): PropsFromState {
  return {
    playAsBlack: settings.playAsBlack
  };
}

export default connect(mapStateToProps, {
  toggleBoardDirection
})(PlayAsControl);
