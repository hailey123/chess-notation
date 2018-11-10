import * as React from 'react';
import './Board.css';

export interface IProps {
  playAsBlack?: boolean;
  lightSquareColor?: string;
  darkSquareColor?: string;
}

const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

class Board extends React.PureComponent<IProps> {
  isDarkSquare(rankIndex: number, fileIndex: number): boolean {
    console.log(rankIndex, fileIndex);

    return !(fileIndex % 2) && !!(rankIndex % 2) || !!(fileIndex % 2) && !(rankIndex % 2);
  }

  render(): JSX.Element {
    const {
      playAsBlack = false,
      darkSquareColor = '#2b2b2b',
      lightSquareColor = '#eae1d7'
    } = this.props;
    let orderedRanks: number[];
    let orderedFiles: string[];

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
