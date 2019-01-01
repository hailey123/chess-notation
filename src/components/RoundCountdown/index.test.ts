import { mapStateToProps } from '.';
import { StoreState } from '../../types';
import { BaseGameState, BaseSettingsState } from '../../constants/models';
jest.mock('../../selectors');

test('mapStateToProps', () => {
  const state: StoreState = {
    game: BaseGameState,
    leaderboard: {},
    settings: BaseSettingsState
  };
  expect(mapStateToProps(state)).toBeDefined();
});
