import * as React from 'react';

import { Props } from './props';

import './NotationInstruction.css';

class NotationInstruction extends React.PureComponent<Props> {
  render(): JSX.Element {
    const { currentCoords } = this.props;
    const displayCoords = currentCoords ? currentCoords.file + currentCoords.rank : '?';
    return <div className="notation-instruction">{displayCoords}</div>;
  }
}

export default NotationInstruction;
