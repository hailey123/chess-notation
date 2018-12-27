import * as React from 'react';
import { shallow } from 'enzyme';

import RoundCountdown from './RoundCountdown';

describe('RoundCountdown', () => {
  it('has the correct className for styling when counting down', () => {
    const wrapper = shallow(<RoundCountdown secondsRemaining={10} />);

    expect(wrapper.hasClass('round-countdown')).toBeTruthy();
    expect(wrapper.hasClass('countdown-finished')).toBeFalsy();
  });
  it('has the correct className for styling when countdown reached 0', () => {
    const wrapper = shallow(<RoundCountdown secondsRemaining={0} />);

    expect(wrapper.hasClass('round-countdown')).toBeTruthy();
    expect(wrapper.hasClass('countdown-finished')).toBeTruthy();
  });
  it('displays the countdown correctly', () => {
    const wrapper = shallow(<RoundCountdown secondsRemaining={10} />);

    expect(wrapper.text()).toBe('0:10');
  });
});
