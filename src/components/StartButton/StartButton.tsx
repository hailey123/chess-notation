import * as React from 'react';
import Button from '@material-ui/core/Button';

import { Props } from './props';

import './StartButton.css';

class StartButton extends React.PureComponent<Props> {
  render(): JSX.Element {
    return <Button variant="contained" color="secondary">Start</Button>;
  }
}

export default StartButton;
