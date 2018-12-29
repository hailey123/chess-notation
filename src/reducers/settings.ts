import { SettingsState } from '../types';
import { Action } from '../actions';
import { BaseSettingsState } from '../constants/models';
import { TOGGLE_BOARD_DIRECTION } from '../constants/actions';

export default function settings(
  state: SettingsState = BaseSettingsState,
  action: Action
): SettingsState {
  switch (action.type) {
    case TOGGLE_BOARD_DIRECTION:
      return {
        ...state,
        playAsBlack: !state.playAsBlack
      };
  }
  return state;
}
