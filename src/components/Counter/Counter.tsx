import * as React from 'react';

import { Props } from './props';

import './Counter.css';

class Counter extends React.PureComponent<Props> {
  render(): JSX.Element {
    return <div className="counter">
      Moves: {this.props.count}
    </div>;
  }
}

export default Counter;
