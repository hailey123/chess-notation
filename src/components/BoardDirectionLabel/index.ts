import { connect } from 'react-redux';

import BoardDirectionLabel from './BoardDirectionLabel';
import { StoreState } from '../../types';
import { PropsFromState } from './props';
import { getPlayerColor } from '../../selectors';

export function mapStateToProps(state: StoreState): PropsFromState {
  return {
    playerColor: getPlayerColor(state)
  };
}

export default connect(mapStateToProps)(BoardDirectionLabel);
