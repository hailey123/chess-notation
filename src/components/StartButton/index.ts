import StartButton from './StartButton';
import { connect } from 'react-redux';
import { startRound, Action } from 'src/actions';
import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from 'src/types';

export function mapDispatchToProps(dispatch: ThunkDispatch<StoreState, null, Action>) {
  // TODO: there is cleaner syntax for this, what is it?
  return {
    startRound: () => dispatch(startRound())
  };
}

export default connect(null, mapDispatchToProps)(StartButton);
