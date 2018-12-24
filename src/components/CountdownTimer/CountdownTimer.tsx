import * as React from 'react';

import { Props } from './props';

import './CountdownTimer.css';

class Countdown extends React.PureComponent<Props> {
  render(): JSX.Element {
    return <div className="countdown-timer">
      <p>1:00</p>
    </div>;
  }
}

export default Countdown;
