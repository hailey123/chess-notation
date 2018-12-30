import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

import PlayRegion from './PlayRegion';
import NotationInstruction from '../NotationInstruction';
import Board from '../Board';
import BoardDirectionLabel from '../BoardDirectionLabel';

describe('PlayRegion', () => {
  let wrapper: ShallowWrapper<any, {}, PlayRegion>;

  beforeEach(() => {
    wrapper = shallow(<PlayRegion />);
  });

  it('has an instruction in chess notation for the target square to click', () => {
    expect(wrapper.find(NotationInstruction).length).toBe(1);
  });
  it('has a chess board', () => {
    expect(wrapper.find(Board).length).toBe(1);
  });
  it('has a label indicating the board direction', () => {
    expect(wrapper.find(BoardDirectionLabel).length).toBe(1);
  });
});
