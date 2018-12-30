import leaderboard from './leaderboard';
import { Action } from '../actions';
import { START_PLAY } from '../constants/actions';

describe('leaderboard reducer', () => {
  it('should return the initial state', () => {
    expect(leaderboard(undefined, {} as Action)).toEqual({});
  });
  it('should return the current state when given an irrelevant action', () => {
    expect(leaderboard({}, { type: START_PLAY })).toEqual({});
  });
});
