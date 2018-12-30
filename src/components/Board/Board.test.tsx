import * as React from 'react';
import { shallow } from 'enzyme';

import { Props } from './props';
import Board from './Board';
import BoardSquare from '../BoardSquare';

describe('Board', () => {
  const darkSquareColor = 'black';
  const lightSquareColor = 'white';
  const baseProps: Props = {
    playAsBlack: false,
    darkSquareColor: 'black',
    lightSquareColor: 'white',
    countdownValue: null
  };
  const ranksSelector = '.squares > .rank';

  it('should have the correct className for styling', () => {
    const wrapper = shallow(<Board {...baseProps} />);

    expect(wrapper.hasClass('board')).toBeTruthy();
  });
  it('hides the countdown when not counting down', () => {
    const wrapper = shallow(<Board {...baseProps} />);

    expect(wrapper.find('.start-countdown').length).toBe(0);
  });
  it('shows the countdown value during countdown', () => {
    const countdownValue = 3;
    const props = {
      ...baseProps,
      countdownValue
    };
    const wrapper = shallow(<Board {...props} />);

    const countdown = wrapper.find('.start-countdown');
    expect(countdown.text()).toBe(countdownValue.toString());
  });
  it('has 8 ranks', () => {
    const wrapper = shallow(<Board {...baseProps} />);

    expect(wrapper.find(ranksSelector).length).toBe(8);
  });
  it('has 64 squares', () => {
    const wrapper = shallow(<Board {...baseProps} />);

    expect(wrapper.find(ranksSelector).find(BoardSquare).length).toBe(64);
  });
  it('has 32 light squares', () => {
    const wrapper = shallow(<Board {...baseProps} />);

    expect(wrapper.find(ranksSelector).find(BoardSquare).filterWhere(
      n => n.props().color === lightSquareColor
    ).length).toBe(32);
  });
  it('has 32 dark squares', () => {
    const wrapper = shallow(<Board {...baseProps} />);

    expect(wrapper.find(ranksSelector).find(BoardSquare).filterWhere(
      n => n.props().color === darkSquareColor
    ).length).toBe(32);
  });
  it('has A8 in the upper left corner when playing as white', () => {
    const wrapper = shallow(<Board {...baseProps} />);

    expect(
      wrapper.find(ranksSelector).at(0).childAt(0).props().coordinate
    ).toEqual({ file: 'A', rank: 8 });
  });
  it('has H1 in the upper left corner when playing as black', () => {
    const props = {
      ...baseProps,
      playAsBlack: true
    };
    const wrapper = shallow(<Board {...props} />);

    expect(
      wrapper.find(ranksSelector).at(0).childAt(0).props().coordinate
    ).toEqual({ file: 'H', rank: 1 });
  });
});
