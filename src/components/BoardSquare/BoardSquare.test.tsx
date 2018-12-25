import * as React from 'react';

import { Props } from './props';
import { shallow } from 'enzyme';
import BoardSquare from './BoardSquare';

describe('BoardSquare', () => {
  const baseProps: Props = {
    coordinate: {
      rank: 1,
      file: 'A'
    },
    color: 'black',
    isTarget: false,
    roundInProgress: false,
    handleClickAtCoordinate: jest.fn()
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('has correct className when round not in progress', () => {
    const wrapper = shallow(<BoardSquare {...baseProps} />);

    expect(wrapper.hasClass('board-square')).toBeTruthy();
    expect(wrapper.hasClass('enabled')).toBeFalsy();
  });
  it('has correct className when enabled but not target', () => {
    const mockProps = {
      ...baseProps,
      roundInProgress: true
    };
    const wrapper = shallow(<BoardSquare {...mockProps} />);

    expect(wrapper.hasClass('board-square')).toBeTruthy();
    expect(wrapper.hasClass('enabled')).toBeTruthy();
    expect(wrapper.hasClass('wrong-answer')).toBeTruthy();
  });
  it('has correct className when enabled and the target', () => {
    const mockProps = {
      ...baseProps,
      isTarget: true,
      roundInProgress: true
    };
    const wrapper = shallow(<BoardSquare {...mockProps} />);

    expect(wrapper.hasClass('board-square')).toBeTruthy();
    expect(wrapper.hasClass('enabled')).toBeTruthy();
    expect(wrapper.hasClass('correct-answer')).toBeTruthy();
  });
  it('doesn\'t call handleClickAtCoordinate when round not in progress', () => {
    const mockProps = {
      ...baseProps,
      roundInProgress: false,
    };
    const wrapper = shallow(<BoardSquare {...mockProps} />);

    wrapper.simulate('click');

    expect(mockProps.handleClickAtCoordinate).toHaveBeenCalledTimes(0);
  });
  it('calls handleClickAtCoordinate when round in progress', () => {
    const mockProps = {
      ...baseProps,
      roundInProgress: true,
    };
    const wrapper = shallow(<BoardSquare {...mockProps} />);

    wrapper.simulate('click');

    expect(mockProps.handleClickAtCoordinate).toHaveBeenCalledTimes(1);
  });
});
