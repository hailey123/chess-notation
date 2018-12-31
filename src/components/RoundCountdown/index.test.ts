import { mapStateToProps } from '.';
import { StoreState } from '../../types';
import { BaseGameState, BaseSettingsState } from '../../constants/models';
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
      settings: BaseSettingsState
    };
    const expectedProps: Props = {
      secondsRemaining: timeLeftInRound,
      showingPenalty: BaseGameState.showingPenalty
    };

    expect(mapStateToProps(mockState)).toEqual(expectedProps);
  });
});
