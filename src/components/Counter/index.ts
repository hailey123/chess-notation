import Counter from './Counter';
import { StoreState } from '../../types';
import { PropsFromState } from './props';
import { connect } from 'react-redux';

function mapStateToProps({ game }: StoreState): PropsFromState {
  return {
    count: game.count
  };
}

export default connect(mapStateToProps)(Counter);
