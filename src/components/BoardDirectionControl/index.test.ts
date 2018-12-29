import { StoreState } from '../../types';
import { mapStateToProps } from '.';
import { BaseGameState, BaseSettingsState } from '../../constants/models';

describe('mapStateToProps', () => {
  it('maps playAsBlack correctly', () => {
    const playAsBlack = true;
    const state: StoreState = {
      game: BaseGameState,
      leaderboard: {},
      settings: {
        ...BaseSettingsState,
        playAsBlack
      }
    };

    expect(mapStateToProps(state).playAsBlack).toBe(playAsBlack);
  });
  it('enables the control when round has not started', () => {
    const state: StoreState = {
      game: {
        ...BaseGameState,
        countdownValue: null,
        roundInProgress: false
      },
      leaderboard: {},
      settings: BaseSettingsState
    };

    expect(mapStateToProps(state).enabled).toBeTruthy();
  });
  it('disables the control during round countdown', () => {
    const state: StoreState = {
      game: {
        ...BaseGameState,
        countdownValue: 3,
        roundInProgress: false
      },
      leaderboard: {},
      settings: BaseSettingsState
    };

    expect(mapStateToProps(state).enabled).toBeFalsy();
  });
  it('disables the control during play', () => {
    const state: StoreState = {
      game: {
        ...BaseGameState,
        countdownValue: null,
        roundInProgress: true
      },
      leaderboard: {},
      settings: BaseSettingsState
    };

    expect(mapStateToProps(state).enabled).toBeFalsy();
  });
});
