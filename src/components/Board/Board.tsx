import * as React from 'react';

import { Rank, File } from '../../types';
import { Ranks, Files } from '../../constants/models';
import { Props } from './props';
import BoardSquare from '../BoardSquare';

import './Board.css';

class Board extends React.PureComponent<Props> {

  isDarkSquare(rankIndex: number, fileIndex: number): boolean {
    return !(fileIndex % 2) && !!(rankIndex % 2) || !!(fileIndex % 2) && !(rankIndex % 2);
  }

  render(): JSX.Element {
    const {
      playAsBlack,
      darkSquareColor,
      lightSquareColor,
      countdownValue
    } = this.props;
    let orderedRanks: Rank[];
    let orderedFiles: File[];

    if (playAsBlack) {
      orderedRanks = Ranks;
      orderedFiles = Files.slice().reverse();
    } else {
      orderedRanks = Ranks.slice().reverse();
      orderedFiles = Files;
    }

    return (
      <div className="board">
        {countdownValue !== null ? <div className="start-countdown">
          <p>{countdownValue}</p>
        </div> : null}
        <div className="squares">
          {orderedRanks.map((rank, rankIndex) =>
            <div key={rank} className="rank">
              {orderedFiles.map((file, fileIndex) =>
                <BoardSquare
                  key={file}
                  color={this.isDarkSquare(rankIndex, fileIndex)
                    ? darkSquareColor
                    : lightSquareColor}
                  coordinate={{ rank, file }}
                />)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Board;
