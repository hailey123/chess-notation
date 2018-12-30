import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import GameControls from './GameControls';
import BoardDirectionControl from '../BoardDirectionControl';
import StartButton from '../StartButton';
import RoundCountdown from '../RoundCountdown';
import Counter from '../Counter';

describe('GameControls', () => {
  let wrapper: ShallowWrapper<any, {}, GameControls>;

  beforeEach(() => {
    wrapper = shallow(<GameControls />);
  });
  it('has a control for flipping the board', () => {
    expect(wrapper.find(BoardDirectionControl).length).toBe(1);
  });
  it('has a start button', () => {
    expect(wrapper.find(StartButton).length).toBe(1);
  });
  it('has a round countdown', () => {
    expect(wrapper.find(RoundCountdown).length).toBe(1);
  });
  it('has a counter to track correct clicks', () => {
    expect(wrapper.find(Counter).length).toBe(1);
  });
});
