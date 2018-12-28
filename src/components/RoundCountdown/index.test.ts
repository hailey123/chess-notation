import { mapStateToProps } from '.';
import { StoreState } from '../../types';
import { BaseGameState } from '../../constants/models';
import { Props } from './props';

describe('mapStateToProps', () => {
  it('maps state to props correctly', () => {
    const timeLeftInRound = 12;
    const mockState: StoreState = {
      game: {
        ...BaseGameState,
        timeLeftInRound
      },
      leaderboard: {},
      settings: {}
    };
    const expectedProps: Props = {
      secondsRemaining: timeLeftInRound
    };

    expect(mapStateToProps(mockState)).toEqual(expectedProps);
  });
});