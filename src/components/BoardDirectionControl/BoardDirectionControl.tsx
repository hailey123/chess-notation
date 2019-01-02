import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { Props } from './props';
import {
  BOARD_DIRECTION_CONTROL_LABEL,
  BOARD_DIRECTION_LABEL_PREFIX
} from '../../constants/userFacingStrings';

import './BoardDirectionControl.css';

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
