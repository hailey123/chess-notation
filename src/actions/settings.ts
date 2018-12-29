import * as constants from '../constants/actions';

export interface ToggleBoardDirection {
  type: constants.TOGGLE_BOARD_DIRECTION;
}

export function toggleBoardDirection(): ToggleBoardDirection {
  return {
    type: constants.TOGGLE_BOARD_DIRECTION
  };
}
