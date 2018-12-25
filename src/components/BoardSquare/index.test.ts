import { StoreState, GameState } from '../../types';
import { mapStateToProps } from '.';
import { PropsPassedIn } from './props';
import { RoundLengthSeconds } from '../../constants/models';

describe('mapStateToProps', () => {
  let baseGameState: GameState;
  let basePropsPassedIn: PropsPassedIn;
  beforeAll(() => {
    baseGameState = {
      countdownValue: null,
      currentCoords: null,
      timeLeftInRound: RoundLengthSeconds,
      roundInProgress: false,
      count: 0
    };
    basePropsPassedIn = {
      coordinate: {
        rank: 7,
        file: 'H'
      },
      color: 'white'
    };
    Object.freeze(baseGameState);
    Object.freeze(basePropsPassedIn);
  });
  it('returns false when there is no current coordinate', () => {
    const state: StoreState = {
      game: baseGameState,
      leaderboard: {},
      settings: {}
    };
    expect(mapStateToProps(state, basePropsPassedIn).isTarget).toBeFalsy();
  });
  it('sets isTarget to false when the square\'s coordinate differs from the target', () => {
    const state: StoreState = {
      game: {
        ...baseGameState,
        currentCoords: {
          rank: 3,
          file: 'A'
        }
      },
      leaderboard: {},
      settings: {}
    };
    expect(mapStateToProps(state, basePropsPassedIn).isTarget).toBeFalsy();
  });
  it('sets isTarget to true when the square\'s coordinate is the target', () => {
    const state: StoreState = {
      game: {
        ...baseGameState,
        currentCoords: basePropsPassedIn.coordinate
      },
      leaderboard: {},
      settings: {}
    };
    expect(mapStateToProps(state, basePropsPassedIn).isTarget).toBeTruthy();
  });
});
