import { connect } from 'react-redux';

import Board from './Board';
import { StoreState } from '../../types';

export function mapStateToProps({ settings, game }: StoreState) {
  const {
    playAsBlack,
    lightSquareColor,
    darkSquareColor
  } = settings;
  const { countdownValue } = game;
  return {
    playAsBlack,
    lightSquareColor,
    darkSquareColor,
    countdownValue
  };
}

export default connect(mapStateToProps)(Board);
