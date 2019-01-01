export type PropsFromState = {
  enabled: boolean
};

type PropsFromDispatch = {
  startRound: () => void;
};

export type Props = PropsFromState & PropsFromDispatch;
