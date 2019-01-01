import * as React from 'react';
import { shallow } from 'enzyme';

import Button from '@material-ui/core/Button';

import StartButton from './StartButton';
import { Props } from './props';
import { START_BUTTON_TEXT } from '../../constants/userFacingStrings';

describe('StartButton', () => {
  const mockStartRound = jest.fn();
  const baseProps: Props = {
    startRound: mockStartRound,
    enabled: true
  };

  it('has the correct className for styling', () => {
    const wrapper = shallow(<StartButton {...baseProps} />);

    expect(wrapper.hasClass('start-button')).toBeTruthy();
  });
  it('has the correct text', () => {
    const wrapper = shallow(<StartButton {...baseProps} />);

    expect(wrapper.childAt(0).text()).toBe(START_BUTTON_TEXT);
  });
  it('is enabled when it should be', () => {
    const wrapper = shallow(<StartButton {...baseProps} />);

    expect(wrapper.find(Button).props().disabled).toBeFalsy();
  });
  it('is disabled when it should be', () => {
    const props: Props = {
      ...baseProps,
      enabled: false
    };
    const wrapper = shallow(<StartButton {...props} />);

    expect(wrapper.find(Button).props().disabled).toBeTruthy();
  });
  it('detects a click', () => {
    const wrapper = shallow(<StartButton {...baseProps} />);

    wrapper.simulate('click');

    expect(mockStartRound).toHaveBeenCalledTimes(1);

    jest.clearAllMocks();
  });
});
