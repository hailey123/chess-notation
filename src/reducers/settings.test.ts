import settings from './settings';

describe('settings reducer', () => {
  it('should return the initial state', () => {
    expect(settings(undefined, {} as any)).toEqual({
      playAsBlack: false,
      lightSquareColor: '#eae1d7',
      darkSquareColor: '#353535'
    });
  });
});
