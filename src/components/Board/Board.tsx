import * as React from 'react';

import { Rank, File } from 'src/types';
import { ranks, files } from 'src/constants/models';
import { PropsFromState } from './props';

type Props = PropsFromState;

import './Board.css';
import BoardSquare from '../BoardSquare';

class Board extends React.PureComponent<Props> {
  isDarkSquare(rankIndex: number, fileIndex: number): boolean {
    return !(fileIndex % 2) && !!(rankIndex % 2) || !!(fileIndex % 2) && !(rankIndex % 2);
  }

  render(): JSX.Element {
    const {
      playAsBlack,
      darkSquareColor,
      lightSquareColor
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
