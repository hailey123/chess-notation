import * as React from 'react';
import { shallow } from 'enzyme';

import NotationInstruction from './NotationInstruction';
import { Coordinate, Rank, File } from '../../types';

describe('NotationInstruction', () => {
  it('has the correct className for styling', () => {
    const wrapper = shallow(<NotationInstruction />);

    expect(wrapper.hasClass('notation-instruction')).toBeTruthy();
  });
  it('shows a question mark when there\'s no instruction', () => {
    const wrapper = shallow(<NotationInstruction />);

    expect(wrapper.text()).toBe('?');
  });
  it('shows the coordinate provided as props', () => {
    const rank: Rank = 1;
    const file: File = 'A';
    const coordinate: Coordinate = {
      rank,
      file
    };
    const wrapper = shallow(<NotationInstruction currentCoords={coordinate} />);

    expect(wrapper.text()).toBe(file + rank);
  });
});
