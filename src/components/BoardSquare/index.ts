import { connect } from 'react-redux';

import BoardSquare from './BoardSquare';
import { Dispatch } from 'react';
import { Action, handleClick } from 'src/actions';
import { PropsPassedIn } from './props';

function mapDispatchToProps(dispatch: Dispatch<Action>, ownProps: PropsPassedIn) {
  return { handleClickAtCoordinate: () => { dispatch(handleClick(ownProps.coordinate)); } };
}

export default connect(null, mapDispatchToProps)(BoardSquare);
