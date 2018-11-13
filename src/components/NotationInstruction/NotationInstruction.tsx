import * as React from 'react';

import { PropsFromState } from './props';

import './NotationInstruction.css';

type Props = PropsFromState;

class NotationInstruction extends React.PureComponent<Props> {
  render(): JSX.Element {
    const { currentCoords } = this.props;
    const displayCoords = currentCoords ? currentCoords.file + currentCoords.rank : '';
    return <div className="notation-instruction">{displayCoords}</div>;
  }
}

export default NotationInstruction;
