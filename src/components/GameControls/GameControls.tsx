import * as React from 'react';

import StartButton from '../StartButton';
import RoundCountdown from '../RoundCountdown';
import Counter from '../Counter';
import BoardDirectionControl from '../BoardDirectionControl';

class GameControls extends React.PureComponent {
  public render() {
    return (
      <div>
        <BoardDirectionControl />
        <StartButton />
        <RoundCountdown />
        <Counter />
      </div>
    );
  }
}

export default GameControls;
