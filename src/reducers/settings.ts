import { SettingsState } from '../types';
import { Action } from '../actions';

export default function settings(
  state: SettingsState = {
    playAsBlack: false,
    lightSquareColor: '#eae1d7',
    darkSquareColor: '#353535'
  },
  _action: Action
): SettingsState {
  return state;
}
