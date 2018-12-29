export type PropsFromState = {
  playAsBlack: boolean
};

type PropsFromDispatch = {
  toggleBoardDirection: () => void
};

export type Props = PropsFromState & PropsFromDispatch;
