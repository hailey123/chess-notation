import * as React from 'react';
import { shallow } from 'enzyme';

import BoardDirectionLabel from './BoardDirectionLabel';
import { PlayerColor } from '../../types';
import { BOARD_DIRECTION_LABEL_PREFIX } from '../../constants/userFacingStrings';

describe('BoardDirectionLabel', () => {
  it('has the correct className for styling', () => {
    const wrapper = shallow(<BoardDirectionLabel playerColor="Black" />);

    expect(wrapper.hasClass('board-direction-label')).toBeTruthy();
  });
  it('shows the correct text when playing as white', () => {
    const playerColor: PlayerColor = 'White';
    const wrapper = shallow(<BoardDirectionLabel playerColor="White" />);

    expect(wrapper.text()).toBe(BOARD_DIRECTION_LABEL_PREFIX + playerColor);
  });
  it('shows the correct text when playing as black', () => {
    const playerColor: PlayerColor = 'Black';
    const wrapper = shallow(<BoardDirectionLabel playerColor={playerColor} />);

    expect(wrapper.text()).toBe(BOARD_DIRECTION_LABEL_PREFIX + playerColor);
  });
});
