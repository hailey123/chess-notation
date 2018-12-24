import * as React from 'react';

import { Props } from './props';

import './Countdown.css';

class Countdown extends React.PureComponent<Props> {
  render(): JSX.Element {
    return <p>1:00</p>;
  }
}

export default Countdown;
