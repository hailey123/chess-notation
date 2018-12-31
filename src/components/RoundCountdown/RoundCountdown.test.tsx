import * as React from 'react';
import { shallow } from 'enzyme';

import RoundCountdown from './RoundCountdown';

describe('RoundCountdown', () => {
  it('has the correct className for styling when counting down', () => {
    const wrapper = shallow(<RoundCountdown secondsRemaining={10} showingPenalty={false} />);

    expect(wrapper.hasClass('round-countdown')).toBeTruthy();
    expect(wrapper.hasClass('red')).toBeFalsy();
  });
  it('has the correct className for styling when countdown reached 0', () => {
    const wrapper = shallow(<RoundCountdown secondsRemaining={0} showingPenalty={false} />);

    expect(wrapper.hasClass('round-countdown')).toBeTruthy();
    expect(wrapper.hasClass('red')).toBeTruthy();
  });
  it('has the correct className for styling when showing penalty', () => {
    const wrapper = shallow(<RoundCountdown secondsRemaining={10} showingPenalty={true} />);

    expect(wrapper.hasClass('round-countdown')).toBeTruthy();
    expect(wrapper.hasClass('red')).toBeTruthy();
  });
  it('displays the countdown correctly', () => {
    const wrapper = shallow(<RoundCountdown secondsRemaining={10} showingPenalty={false} />);

    expect(wrapper.text()).toBe('0:10');
  });
});
