export type PropsFromState = {
  playAsBlack: boolean,
  enabled: boolean
};

type PropsFromDispatch = {
  toggleBoardDirection: () => void
};

export type Props = PropsFromState & PropsFromDispatch;
