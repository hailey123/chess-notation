import * as React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

import './BoardDirectionControl.css';
import { Props } from './props';
import {
  BOARD_DIRECTION_CONTROL_LABEL,
  BOARD_DIRECTION_LABEL_PREFIX
} from '../../constants/userFacingStrings';

class BoardDirectionControl extends React.Component<Props> {
  public render() {
    const { playAsBlack, enabled, toggleBoardDirection } = this.props;
    return (
      <div className="board-direction-control">
        <FormControlLabel
          control={
            <Checkbox
              checked={playAsBlack}
              disabled={!enabled}
              onChange={toggleBoardDirection}
              value={`${BOARD_DIRECTION_LABEL_PREFIX}Black`}
            />
          }
          label={BOARD_DIRECTION_CONTROL_LABEL}
        />
      </div>);
  }
}

export default BoardDirectionControl;
