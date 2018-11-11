import { connect } from 'react-redux';

import NotationInstruction from './NotationInstruction';
import { StoreState } from 'src/types';

export function mapStateToProps({ game }: StoreState) {
  return { currentCoords: game.currentCoords };
}

export default connect(mapStateToProps)(NotationInstruction);
