import { StoreState } from '../../types';
import { BaseGameState } from '../../constants/models';
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
      settings: {}
    };
    const expectedProps: Props = {
      count: mockCount
    };

    expect(mapStateToProps(mockState)).toEqual(expectedProps);
  });
});
