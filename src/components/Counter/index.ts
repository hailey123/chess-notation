import Counter from './Counter';
import { StoreState } from '../../types';
import { PropsFromState } from './props';
import { connect } from 'react-redux';
import { getCount } from '../../selectors';

export function mapStateToProps(state: StoreState): PropsFromState {
  return {
    count: getCount(state)
  };
}

export default connect(mapStateToProps)(Counter);
