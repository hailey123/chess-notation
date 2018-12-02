import StartButton from './StartButton';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { startRound } from 'src/actions';

export function mapDispatchToProps(dispatch: Dispatch) {
  // TODO: there is cleaner syntax for this, what is it?
  return {
    startRound: () => dispatch(startRound())
  };
}

export default connect(null, mapDispatchToProps)(StartButton);
