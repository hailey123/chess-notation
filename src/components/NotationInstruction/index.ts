import { connect } from 'react-redux';

import NotationInstruction from './NotationInstruction';
import { StoreState } from 'src/types';

export function mapStateToProps({ currentCoords }: StoreState) {
  return { currentCoords };
}

export default connect(mapStateToProps)(NotationInstruction);
