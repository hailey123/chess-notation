import leaderboard from './leaderboard';

describe('leaderboard reducer', () => {
  it('should return the initial state', () => {
    expect(leaderboard(undefined, {} as any)).toEqual({});
  });
});
