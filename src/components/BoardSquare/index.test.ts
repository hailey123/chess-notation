import { StoreState } from '../../types';
import { mapStateToProps } from '.';
import { PropsPassedIn } from './props';
import { BaseGameState, BaseSettingsState } from '../../constants/models';

describe('mapStateToProps', () => {
  let basePropsPassedIn: PropsPassedIn;
  beforeAll(() => {
    basePropsPassedIn = {
      coordinate: {
        rank: 7,
        file: 'H'
      },
      color: 'white'
    };
    Object.freeze(basePropsPassedIn);
  });
  it('returns false when there is no current coordinate', () => {
    const state: StoreState = {
      game: BaseGameState,
      leaderboard: {},
      settings: BaseSettingsState
    };
    expect(mapStateToProps(state, basePropsPassedIn).isTarget).toBeFalsy();
  });
  it('sets isTarget to false when the square\'s coordinate differs from the target', () => {
    const state: StoreState = {
      game: {
        ...BaseGameState,
        currentCoords: {
          rank: 3,
          file: 'A'
        }
      },
      leaderboard: {},
      settings: BaseSettingsState
    };
    expect(mapStateToProps(state, basePropsPassedIn).isTarget).toBeFalsy();
  });
  it('sets isTarget to true when the square\'s coordinate is the target', () => {
    const state: StoreState = {
      game: {
        ...BaseGameState,
        currentCoords: basePropsPassedIn.coordinate
      },
      leaderboard: {},
      settings: BaseSettingsState
    };
    expect(mapStateToProps(state, basePropsPassedIn).isTarget).toBeTruthy();
  });
});
