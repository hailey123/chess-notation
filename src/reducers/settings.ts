import { SettingsState } from 'src/types';
import { Action } from 'src/actions';

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
