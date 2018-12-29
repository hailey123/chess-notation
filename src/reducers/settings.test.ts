import settings from './settings';
import { SettingsState } from '../types';
import { BaseSettingsState } from '../constants/models';
import { ToggleBoardDirection } from '../actions';
import { TOGGLE_BOARD_DIRECTION } from '../constants/actions';

describe('settings reducer', () => {
  it('should return the initial state', () => {
    expect(settings(undefined, {} as any)).toEqual({
      playAsBlack: false,
      lightSquareColor: '#eae1d7',
      darkSquareColor: '#353535'
    });
  });
  it('should handle TOGGLE_BOARD_DIRECTION', () => {
    const stateBefore: SettingsState = {
      ...BaseSettingsState,
      playAsBlack: false
    };
    Object.freeze(stateBefore);
    const stateAfter: SettingsState = {
      ...BaseSettingsState,
      playAsBlack: true
    };
    const action: ToggleBoardDirection = {
      type: TOGGLE_BOARD_DIRECTION
    };

    expect(settings(stateBefore, action)).toEqual(stateAfter);
  });
});
