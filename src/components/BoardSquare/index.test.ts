import { StoreState } from '../../types';
import { mapStateToProps } from '.';
import { PropsPassedIn } from './props';
import { BaseGameState, BaseSettingsState } from '../../constants/models';
import * as selectors from '../../selectors';
jest.mock('../../selectors');

test('mapStateToProps', () => {
  jest.spyOn(selectors, 'makeGetIsTargetSquare').mockReturnValue(jest.fn());
  const state: StoreState = {
    game: BaseGameState,
    leaderboard: {},
    settings: BaseSettingsState
  };
  const propsPassedIn: PropsPassedIn = {
    coordinate: {
      rank: 7,
      file: 'H'
    },
    color: 'white'
  };
  expect(mapStateToProps(state, propsPassedIn)).toBeDefined();
});
