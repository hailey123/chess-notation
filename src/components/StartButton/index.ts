import StartButton from './StartButton';
import { connect } from 'react-redux';
import { startRound, Action } from '../../actions';
import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from '../../types';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StoreState, null, Action>
) => bindActionCreators(
  {
    startRound,
  },
  dispatch,
);

export default connect(null, mapDispatchToProps)(StartButton);
