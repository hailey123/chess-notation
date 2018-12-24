import * as React from 'react';

import { Props } from './props';
import { clockTimeFromSeconds, clockTimeToString } from '../../lib/timeUtils';

import './CountdownTimer.css';

class Countdown extends React.PureComponent<Props> {
  render(): JSX.Element {
    const { secondsRemaining } = this.props;
    let displayTime: string | null = null;
    if (secondsRemaining >= 0) {
      const clockTime = clockTimeFromSeconds(secondsRemaining);
      displayTime = clockTimeToString(clockTime);
    }
    return <div className="countdown-timer">
      {displayTime ? <p>{displayTime}</p> : null}
    </div>;
  }
}

export default Countdown;
