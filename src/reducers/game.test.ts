import game from './game';
import { SHOW_NEXT_COORDS } from '../constants/actions';
import { GameState } from 'src/types';
import * as util from '../lib/boardUtils';

describe('game reducer', () => {
  it('should return the initial state', () => {
    const initialState: GameState = {
      inGameLoop: false,
      coordsPerRound: 8,
      showingTimingResult: false,
      currentCoords: { file: 'F', rank: 3 }
    };
    expect(game(undefined, {} as any)).toEqual(initialState);
  });
  it('should handle SHOW_NEXT_COORDS', () => {
    const stateBefore: GameState = {
      inGameLoop: false,
      coordsPerRound: 8,
      showingTimingResult: false,
      currentCoords: { file: 'F', rank: 3 }
    };
    const stateAfter: GameState = {
      inGameLoop: false,
      coordsPerRound: 8,
      showingTimingResult: false,
      currentCoords: { file: 'H', rank: 6 }
    };
    jest.spyOn(util, 'generateRandomCoords').mockReturnValue({
      file: 'H', rank: 6
    });
    expect(game(stateBefore, {
      type: SHOW_NEXT_COORDS
    })).toEqual(stateAfter);
  });
});
