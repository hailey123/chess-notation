import * as React from 'react';

import { NotationInstructionProps } from './props';

import './NotationInstruction.css';

class NotationInstruction extends React.PureComponent<NotationInstructionProps> {
  render(): JSX.Element {
    return <div className="notation-instruction">F3</div>;
  }
}

export default NotationInstruction;
