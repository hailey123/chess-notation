import StartButton from './StartButton';
import { connect } from 'react-redux';
import { startRound } from '../../actions';

export default connect(null, {
  startRound,
})(StartButton);
