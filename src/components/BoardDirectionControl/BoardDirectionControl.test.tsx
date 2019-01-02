import * as React from 'react';
import { shallow } from 'enzyme';

import { Props } from './props';
import BoardDirectionControl from './BoardDirectionControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

describe('BoardDirectionControl', () => {
  const baseProps: Props = {
    playAsBlack: false,
    enabled: true,
    toggleBoardDirection: jest.fn()
  };

  it('has the correct className for styling', () => {
    const wrapper = shallow(<BoardDirectionControl {...baseProps} />);

    expect(wrapper.hasClass('board-direction-control')).toBeTruthy();
  });
  it('has a control to switch the board direction', () => {
    const wrapper = shallow(<BoardDirectionControl {...baseProps} />);

    expect(wrapper.find(FormControlLabel).length).toBe(1);
  });
});
