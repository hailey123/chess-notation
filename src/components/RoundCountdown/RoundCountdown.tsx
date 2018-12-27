import * as React from 'react';
import classnames from 'classnames';

import { Props } from './props';
import { clockTimeFromSeconds, clockTimeToString } from '../../lib/timeUtils';

import './RoundCountdown.css';

class RoundCountdown extends React.PureComponent<Props> {
  render(): JSX.Element {
    const { secondsRemaining } = this.props;
    const clockTime = clockTimeFromSeconds(this.props.secondsRemaining);
    const displayTime = clockTimeToString(clockTime);
    const classNames = classnames('countdown-timer', secondsRemaining === 0 ? 'finished' : '');
    return <div className={classNames}>
      {displayTime}
    </div>;
  }
}

export default RoundCountdown;
