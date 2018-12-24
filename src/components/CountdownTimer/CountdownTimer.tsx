import * as React from 'react';

import { Props } from './props';

import './CountdownTimer.css';

class Countdown extends React.PureComponent<Props> {
  render(): JSX.Element {
    const { secondsRemaining } = this.props;
    console.log(secondsRemaining);

    return <div className="countdown-timer">
      {secondsRemaining >= 0
        ? <p>1:00</p>
        : null}
    </div>;
  }
}

export default Countdown;
