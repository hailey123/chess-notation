import * as actions from './settings';
import * as constants from '../constants/actions';

describe('settings actions', () => {
  it('should create an action to handle target square clicked', () => {
    const expectedAction: actions.ToggleBoardDirection = {
      type: constants.TOGGLE_BOARD_DIRECTION
    };
    expect(actions.toggleBoardDirection()).toEqual(expectedAction);
  });
});
