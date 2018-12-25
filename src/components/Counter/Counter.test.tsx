import * as React from 'react';

import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
  it('has the correct className for styling', () => {
    const wrapper = shallow(<Counter count={0} />);
    expect(wrapper.hasClass('counter')).toBeTruthy();
  });
  it('shows the current count', () => {
    const count = 9;
    const wrapper = shallow(<Counter count={count} />);
    expect(wrapper.instance().props['count']).toBe(count);
  });
});
