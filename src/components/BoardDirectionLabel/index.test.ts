import { StoreState } from '../../types';
import { BaseGameState, BaseSettingsState } from '../../constants/models';
import { mapStateToProps } from '.';
import { Props } from './props';

describe('mapStateToProps', () => {
  it('maps the playerColor correctly', () => {
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
});
