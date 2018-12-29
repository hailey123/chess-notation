import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import './PlayAsControl.css';
import { Props } from './props';

class PlayAsControl extends React.Component<Props> {
  public render() {
    const { playAsBlack, toggleBoardDirection } = this.props;
    const color = playAsBlack ? 'Black' : 'White';
    return (
      <div className="play-as-control">
        <FormControlLabel
          control={
            <Switch
              checked={true}
              onChange={toggleBoardDirection}
              value={color}
            />
          }
          label={`Playing as ${color}`}
        />
      </div>);
  }
}

export default PlayAsControl;
