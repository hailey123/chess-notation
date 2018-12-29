import { SettingsState } from '../types';
import { Action } from '../actions';
import { BaseSettingsState } from '../constants/models';

export default function settings(
  state: SettingsState = BaseSettingsState,
  _action: Action
): SettingsState {
  return state;
}
