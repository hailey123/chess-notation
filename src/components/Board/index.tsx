import { connect } from 'react-redux';

import Board from './Board';
import { StoreState } from '../../types';
import {
  getPlayAsBlack,
  getLightSquareColor,
  getDarkSquareColor,
  getCountdownValue
} from '../../selectors';

export function mapStateToProps(state: StoreState) {
  return {
    playAsBlack: getPlayAsBlack(state),
    lightSquareColor: getLightSquareColor(state),
    darkSquareColor: getDarkSquareColor(state),
    countdownValue: getCountdownValue(state)
  };
}

export default connect(mapStateToProps)(Board);
