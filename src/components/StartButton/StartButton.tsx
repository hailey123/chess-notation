import * as React from 'react';

import { Props } from './props';

import './StartButton.css';

class StartButton extends React.PureComponent<Props> {
  render(): JSX.Element {
    return <button>Start</button>;
  }
}

export default StartButton;
