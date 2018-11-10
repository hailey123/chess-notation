import * as React from 'react';

import { NotationInstructionProps } from './props';

import './NotationInstruction.css';

class NotationInstruction extends React.PureComponent<NotationInstructionProps> {
  render(): JSX.Element {
    const { currentCoords } = this.props;
    const displayCoords = currentCoords ? currentCoords.file + currentCoords.rank : '';
    return <div className="notation-instruction">{displayCoords}</div>;
  }
}

export default NotationInstruction;
