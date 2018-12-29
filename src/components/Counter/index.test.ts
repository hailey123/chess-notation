import { StoreState } from '../../types';
import { BaseGameState, BaseSettingsState } from '../../constants/models';
import { mapStateToProps } from '.';
import { Props } from './props';

describe('mapStateToProps', () => {
  it('maps the count correctly', () => {
    const mockCount = 9;
    const mockState: StoreState = {
      game: {
        ...BaseGameState,
        count: mockCount
      },
      leaderboard: {},
      settings: BaseSettingsState
    };
    const expectedProps: Props = {
      count: mockCount
    };

    expect(mapStateToProps(mockState)).toEqual(expectedProps);
  });
});
