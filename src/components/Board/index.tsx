import { connect } from 'react-redux';

import Board from './Board';
import { StoreState } from 'src/types';

export function mapStateToProps({ settings }: StoreState) {
  const {
    playAsBlack,
    lightSquareColor,
    darkSquareColor
  } = settings;
  return {
    playAsBlack,
    lightSquareColor,
    darkSquareColor
  };
}

export default connect(mapStateToProps)(Board);
