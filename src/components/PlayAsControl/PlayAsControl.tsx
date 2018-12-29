import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import './PlayAsControl.css';
import { Props } from './props';

class PlayAsControl extends React.Component<Props> {
  public render() {
    const { playAsBlack, toggleBoardDirection } = this.props;
    return (
      <div className="play-as-control">
        <FormControlLabel
          control={
            <Checkbox
              checked={playAsBlack}
              onChange={toggleBoardDirection}
              value="Black"
            />
          }
          label="Play as Black"
        />
      </div>);
  }
}

export default PlayAsControl;
