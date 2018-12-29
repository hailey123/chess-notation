import * as React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

import './BoardDirectionControl.css';
import { Props } from './props';

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
              value="Playing as Black"
            />
          }
          label="Play as Black"
        />
      </div>);
  }
}

export default BoardDirectionControl;