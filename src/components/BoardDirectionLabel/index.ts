import { connect } from 'react-redux';

import BoardDirectionLabel from './BoardDirectionLabel';
import { StoreState } from '../../types';
import { PropsFromState } from './props';

export function mapStateToProps({ settings }: StoreState): PropsFromState {
  return {
    playerColor: settings.playAsBlack ? 'Black' : 'White'
  };
}

export default connect(mapStateToProps)(BoardDirectionLabel);
