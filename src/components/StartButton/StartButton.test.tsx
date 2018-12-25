import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import StartButton from './StartButton';
import { Props } from './props';
import { START_BUTTON_TEXT } from '../../constants/userFacingStrings';

describe('StartButton', () => {
  let wrapper: ShallowWrapper<StartButton, Readonly<{}>, React.Component<{}, {}, any>>;
  const mockStartRound = jest.fn();
  const baseProps: Props = {
    startRound: mockStartRound
  };

  beforeEach(() => {
    wrapper = shallow(<StartButton {...baseProps} />);
  });

  it('has the correct className for styling', () => {
    expect(wrapper.hasClass('start-button')).toBeTruthy();
  });
  it('has the correct text', () => {
    expect(wrapper.childAt(0).text()).toBe(START_BUTTON_TEXT);
  });
  it('detects a click', () => {
    wrapper.simulate('click');

    expect(mockStartRound).toHaveBeenCalledTimes(1);

    jest.clearAllMocks();
  });
});
