import { StoreState } from '../../types';
import { BaseGameState, BaseSettingsState } from '../../constants/models';
import { mapStateToProps } from '.';
import { Props } from './props';

describe('mapStateToProps', () => {
  it('maps the playerColor correctly when playing as black', () => {
    const mockState: StoreState = {
      game: BaseGameState,
      leaderboard: {},
      settings: {
        ...BaseSettingsState,
        playAsBlack: true
      }
    };
    const expectedProps: Props = {
      playerColor: 'Black'
    };

    expect(mapStateToProps(mockState)).toEqual(expectedProps);
  });
  it('maps the playerColor correctly when not playing as black', () => {
    const mockState: StoreState = {
      game: BaseGameState,
      leaderboard: {},
      settings: {
        ...BaseSettingsState,
        playAsBlack: false
      }
    };
    const expectedProps: Props = {
      playerColor: 'White'
    };

    expect(mapStateToProps(mockState)).toEqual(expectedProps);
  });
});
