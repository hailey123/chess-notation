import { Rank, File } from 'src/types';

export const ranks: Rank[] = [1, 2, 3, 4, 5, 6, 7, 8];
export const files: File[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export const START_ROUND = 'START_ROUND';
export type START_ROUND = typeof START_ROUND;

export const STOP_ROUND = 'STOP_ROUND';
export type STOP_ROUND = typeof STOP_ROUND;

export const SET_COORDS_PER_ROUND = 'SET_COORDS_PER_ROUND';
export type SET_COORDS_PER_ROUND = typeof SET_COORDS_PER_ROUND;

export const SHOW_NEXT_COORDS = 'SHOW_NEXT_COORDS';
export type SHOW_NEXT_COORDS = typeof SHOW_NEXT_COORDS;

export const HANDLE_CLICK = 'HANDLE_CLICK';
export type HANDLE_CLICK = typeof HANDLE_CLICK;
