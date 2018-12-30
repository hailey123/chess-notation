import { mapStateToProps } from '.';
import { StoreState } from '../../types';
import { BaseGameState, BaseSettingsState } from '../../constants/models';
import { Props } from './props';

describe('mapStateToProps', () => {
  it('maps game & settings states to props correctly', () => {
    const lightSquareColor = 'white';
    const darkSquareColor = 'black';
    const state: StoreState = {
      game: BaseGameState,
      leaderboard: {},
      settings: {
        ...BaseSettingsState,
        lightSquareColor,
        darkSquareColor
      }
    };
    const expectedProps: Props = {
      lightSquareColor,
      darkSquareColor,
      playAsBlack: BaseSettingsState.playAsBlack,
      countdownValue: BaseGameState.countdownValue
    };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
