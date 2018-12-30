import { StoreState, Coordinate } from '../../types';
import { BaseGameState, BaseSettingsState } from '../../constants/models';
import { mapStateToProps } from '.';
import { Props } from './props';

describe('mapStateToProps', () => {
  it('maps the coordinates correctly', () => {
    const currentCoords: Coordinate = {
      rank: 1,
      file: 'H'
    };
    Object.freeze(currentCoords);
    const mockState: StoreState = {
      game: {
        ...BaseGameState,
        currentCoords
      },
      leaderboard: {},
      settings: BaseSettingsState
    };
    const expectedProps: Props = {
      currentCoords
    };

    expect(mapStateToProps(mockState)).toEqual(expectedProps);
  });
});
