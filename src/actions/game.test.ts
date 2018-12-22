import * as actions from './game';
import * as constants from '../constants/actions';
import { Coordinate } from '../types';

describe('game actions', () => {
  it('should create an action to show next coordinates', () => {
    const expectedAction: actions.ShowNextCoords = {
      type: constants.SHOW_NEXT_COORDS
    };
    expect(actions.showNextCoords()).toEqual(expectedAction);
  });
  it('should create an action to handle square clicked', () => {
    const coordinate: Coordinate = {
      file: 'A',
      rank: 4
    };
    Object.freeze(coordinate);
    const expectedAction: actions.HandleSquareClicked = {
      type: constants.HANDLE_SQUARE_CLICKED,
      square: coordinate
    };
    expect(actions.handleSquareClicked(coordinate)).toEqual(expectedAction);
  });
});
