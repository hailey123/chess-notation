import { mapStateToProps } from '.';
import { StoreState } from '../../types';
import { BaseGameState, BaseSettingsState } from '../../constants/models';
import { Props } from './props';

describe('mapStateToProps', () => {
  it('maps game & settings states to props correctly', () => {
    const state: StoreState = {
      game: BaseGameState,
      leaderboard: {},
      settings: BaseSettingsState
    };
    const expectedProps: Props = {
      playAsBlack: BaseSettingsState.playAsBlack,
      lightSquareColor: BaseSettingsState.lightSquareColor,
      darkSquareColor: BaseSettingsState.darkSquareColor,
      countdownValue: BaseGameState.countdownValue
    };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
