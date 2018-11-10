import * as React from 'react';

import { Rank, File } from 'src/types';
import { ranks, files } from 'src/constants';
import { BoardProps } from './props';

import './Board.css';

class Board extends React.PureComponent<BoardProps> {
  isDarkSquare(rankIndex: number, fileIndex: number): boolean {
    console.log(rankIndex, fileIndex);

    return !(fileIndex % 2) && !!(rankIndex % 2) || !!(fileIndex % 2) && !(rankIndex % 2);
  }

  render(): JSX.Element {
    const {
      playAsBlack = false,
      darkSquareColor = '#353535',
      lightSquareColor = '#eae1d7'
    } = this.props;
    let orderedRanks: Rank[];
    let orderedFiles: File[];

    if (playAsBlack) {
      orderedRanks = ranks;
      orderedFiles = files.reverse();
    } else {
      orderedRanks = ranks.reverse();
      orderedFiles = files;
    }

    return (
      <div className="board">
        <div className="squares">
          {
            orderedRanks.map((rank, rankIndex) =>
              <div key={rank} className="rank">
                {orderedFiles.map((file, fileIndex) => <div
                  key={file}
                  className="square"
                  style={{
                    backgroundColor: this.isDarkSquare(rankIndex, fileIndex)
                      ? darkSquareColor
                      : lightSquareColor,
                  }}>{/*file + rank*/}</div>)}
              </div>,
            )
          }
        </div>
      </div>
    );
  }
}

export default Board;
