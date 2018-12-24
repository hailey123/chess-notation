import * as React from 'react';

import { Props } from './props';
import { clockTimeFromSeconds } from '../../lib/timeUtils';
import { ClockTime } from '../../types';

import './CountdownTimer.css';

class Countdown extends React.PureComponent<Props> {
  clockTimeToString(clockTime: ClockTime) {
    const { seconds, minutes } = clockTime;
    if (seconds > 9) {
      return `${minutes}:${seconds}`;
    }
    return `${minutes}:0${seconds}`;
  }
  render(): JSX.Element {
    const { secondsRemaining } = this.props;
    let displayTime: string | null = null;
    if (secondsRemaining >= 0) {
      const clockTime = clockTimeFromSeconds(secondsRemaining);
      displayTime = this.clockTimeToString(clockTime);
    }
    return <div className="countdown-timer">
      {displayTime ? <p>{displayTime}</p> : null}
    </div>;
  }
}

export default Countdown;
