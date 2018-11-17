import game from './game';

describe('game reducer', () => {
  it('should return the initial state', () => {
    expect(game(undefined, {} as any)).toEqual({
      inGameLoop: false,
      coordsPerRound: 8,
      showingTimingResult: false,
      currentCoords: { file: 'F', rank: 3 }
    });
  });
});
