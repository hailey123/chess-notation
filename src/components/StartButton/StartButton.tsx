import * as React from 'react';
import Button from '@material-ui/core/Button';

import { Props } from './props';
import { START_BUTTON_TEXT } from '../../constants/userFacingStrings';

import './StartButton.css';

class StartButton extends React.PureComponent<Props> {
  render(): JSX.Element {
    const { enabled, startRound } = this.props;
    return <Button
      disabled={!enabled}
      variant="contained"
      color="secondary"
      className="start-button"
      onClick={startRound}>
      {START_BUTTON_TEXT}
    </Button>;
  }
}

export default StartButton;
