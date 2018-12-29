import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import './PlayAsControl.css';

class PlayAsControl extends React.Component {
  public render() {
    return (
      <div className="play-as-control">
        <FormControlLabel
          control={
            <Switch
              checked={true}
              onChange={() => {
                // TODO
              }}
              value="Black"
            />
          }
          label="Playing as Black"
        />
      </div>);
  }
}

export default PlayAsControl;
