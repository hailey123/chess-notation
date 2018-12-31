import * as React from 'react';
import classnames from 'classnames';

import { Props } from './props';
import { clockTimeFromSeconds, clockTimeToString } from '../../lib/timeUtils';

import './RoundCountdown.css';

class RoundCountdown extends React.PureComponent<Props> {
  render(): JSX.Element {
    const { secondsRemaining, showingPenalty } = this.props;
    const clockTime = clockTimeFromSeconds(this.props.secondsRemaining);
    const displayTime = clockTimeToString(clockTime);
    const classNames = classnames(
      'round-countdown',
      secondsRemaining === 0 || showingPenalty ? 'red' : ''
    );
    return <div className={classNames}>
      {displayTime}
    </div>;
  }
}

export default RoundCountdown;
