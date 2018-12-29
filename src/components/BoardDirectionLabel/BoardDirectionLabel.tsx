import * as React from 'react';

import { Props } from './props';
import { BOARD_DIRECTION_LABEL_PREFIX } from '../../constants/userFacingStrings';

import './BoardDirectionLabel.css';

class BoardDirectionLabel extends React.PureComponent<Props> {
  render(): JSX.Element {
    return <div className="board-direction-label">
      {BOARD_DIRECTION_LABEL_PREFIX}{this.props.playerColor}
    </div>;
  }
}

export default BoardDirectionLabel;
