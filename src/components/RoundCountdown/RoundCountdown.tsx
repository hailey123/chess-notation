import * as React from 'react';

import { Props } from './props';
import { clockTimeFromSeconds, clockTimeToString } from '../../lib/timeUtils';

import './RoundCountdown.css';

class RoundCountdown extends React.PureComponent<Props> {
  render(): JSX.Element {
    const clockTime = clockTimeFromSeconds(this.props.secondsRemaining);
    const displayTime = clockTimeToString(clockTime);
    return <div className="countdown-timer">
      {displayTime}
    </div>;
  }
}

export default RoundCountdown;
