import game from './game';
import { GameState, Coordinate } from '../types';
import * as util from '../lib/boardUtils';
import { BaseGameState } from '../constants/models';
import { HANDLE_SQUARE_CLICKED } from '../constants/actions';
import { HandleSquareClicked, Action } from '../actions';

describe('game reducer', () => {
  let mockGenerateRandomCoordinates: jest.SpyInstance<(
    lastCoords?: Coordinate | null
  ) => Coordinate>;
  const nextCoordinates: Coordinate = {
    file: 'H',
    rank: 6
  };
  beforeAll(() => {
    Object.freeze(nextCoordinates);
  });
  beforeEach(() => {
    mockGenerateRandomCoordinates = jest.spyOn(util, 'generateRandomCoords').mockReturnValue(
      nextCoordinates
    );
  });
  afterEach(() => {
    // TODO: jest.restoreAllMocks in afterEach currently doesn't work.
    // After ejecting, see if I can fix this.
    // In the meantime, mocks must be individually restored.
    mockGenerateRandomCoordinates.mockRestore();
  });
  it('should return the initial state', () => {
    expect(game(undefined, {} as Action)).toEqual(BaseGameState);
  });
  it('should handle HANDLE_SQUARE_CLICKED', () => {
    const mockCount = 4;
    const stateBefore: GameState = {
      ...BaseGameState,
      count: mockCount
    };
    const stateAfter: GameState = {
      ...BaseGameState,
      currentCoords: nextCoordinates,
      count: mockCount + 1
    };
    const action: HandleSquareClicked = {
      type: HANDLE_SQUARE_CLICKED,
      isTarget: true
    };

    expect(game(stateBefore, action)).toEqual(stateAfter);
  });
});
