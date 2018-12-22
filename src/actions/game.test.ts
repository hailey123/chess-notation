import * as actions from './game';
import * as constants from '../constants/actions';

describe('game actions', () => {
  it('should create an action to show next coordinates', () => {
    const expectedAction: actions.ShowNextCoords = {
      type: constants.SHOW_NEXT_COORDS
    };
    expect(actions.showNextCoords()).toEqual(expectedAction);
  });
  it('should create an action to handle target square clicked', () => {
    const isTarget = true;
    const expectedAction: actions.HandleSquareClicked = {
      isTarget,
      type: constants.HANDLE_SQUARE_CLICKED
    };
    expect(actions.handleSquareClicked(isTarget)).toEqual(expectedAction);
  });
  it('should create an action to handle non-target square clicked', () => {
    const isTarget = false;
    const expectedAction: actions.HandleSquareClicked = {
      isTarget,
      type: constants.HANDLE_SQUARE_CLICKED,
    };
    expect(actions.handleSquareClicked(isTarget)).toEqual(expectedAction);
  });
});
