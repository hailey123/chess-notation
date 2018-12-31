import { LeaderboardState } from '../types';
import { Action } from '../actions';

export default function leaderboard(
  state: LeaderboardState = {},
  action: Action
): LeaderboardState {
  switch (action.type) { }
  return state;
}
