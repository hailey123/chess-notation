import * as React from 'react';

import Board from '../Board';
import NotationInstruction from '../NotationInstruction';
import BoardDirectionLabel from '../BoardDirectionLabel';

class PlayRegion extends React.PureComponent {
  public render() {
    return (
      <div>
        <NotationInstruction />
        <Board />
        <BoardDirectionLabel />
      </div>
    );
  }
}

export default PlayRegion;
