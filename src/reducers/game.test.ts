import game from './game';
import { SHOW_NEXT_COORDS } from '../constants/actions';
import { GameState, Coordinate } from '../types';
import * as util from '../lib/boardUtils';
import { RoundLengthSeconds } from '../constants/models';

describe('game reducer', () => {
  let initialState: GameState;
  beforeAll(() => {
    initialState = {
      countdownValue: null,
      coordsPerRound: 8,
      showingTimingResult: false,
      currentCoords: null,
      timeLeftInRound: RoundLengthSeconds
    };
    Object.freeze(initialState);
  });
  it('should return the initial state', () => {
    expect(game(undefined, {} as any)).toEqual(initialState);
  });
  it('should handle SHOW_NEXT_COORDS', () => {
    const nextCoordinates: Coordinate = {
      file: 'H',
      rank: 6
    };
    Object.freeze(nextCoordinates);
    const stateAfter: GameState = {
      ...initialState,
      currentCoords: nextCoordinates
    };
    const mockGenerateRandomCoordinates = jest.spyOn(util, 'generateRandomCoords').mockReturnValue(
      nextCoordinates
    );
    expect(game(initialState, {
      type: SHOW_NEXT_COORDS
    })).toEqual(stateAfter);

    // TODO: jest.restoreAllMocks in afterEach currently doesn't work.
    // After ejecting, see if I can fix this.
    // In the meantime, mocks must be individually restored.
    mockGenerateRandomCoordinates.mockRestore();
  });
});
