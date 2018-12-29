import * as React from 'react';

import { Props } from './props';

import './BoardDirectionLabel.css';

class BoardDirectionLabel extends React.PureComponent<Props> {
  render(): JSX.Element {
    return <div className="board-direction-label">
      Playing as {this.props.playerColor}
    </div>;
  }
}

export default BoardDirectionLabel;
